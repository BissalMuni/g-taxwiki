-- =============================================================
-- 회원가입 승인제: 신규 가입자는 'pending'(승인 대기) 상태로 시작
-- 읽기 권한조차 최고관리자/관리자 승인 후 부여된다.
-- Supabase SQL Editor에서 실행하거나 마이그레이션으로 적용
-- =============================================================

-- 1. role CHECK 제약에 'pending' 추가
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_role_check;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_role_check
  CHECK (role IN ('pending', 'reader', 'editor', 'subadmin', 'admin', 'superadmin'));

-- 2. 신규 가입 기본값을 'pending'으로 변경 (자동 'reader' 부여 중단)
ALTER TABLE public.profiles
  ALTER COLUMN role SET DEFAULT 'pending';

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, display_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'display_name', ''),
    'pending'  -- 승인 전까지 읽기 권한 없음
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Custom Access Token Hook — 프로필이 없을 때의 안전 기본값도 'pending'
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event JSONB)
RETURNS JSONB AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role
  FROM public.profiles
  WHERE id = (event->>'user_id')::UUID;

  IF user_role IS NOT NULL THEN
    event := jsonb_set(event, '{claims,user_role}', to_jsonb(user_role));
  ELSE
    event := jsonb_set(event, '{claims,user_role}', '"pending"');
  END IF;

  RETURN event;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;
