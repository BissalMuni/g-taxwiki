export { acquisition } from './acquisition';
export { corpAcquisitionTax } from './corp-acquisition-tax';
export { property } from './property';
export { vehicle } from './vehicle';
export { redevelopment } from './redevelopment';
export type { TreeNode, Book } from './types';
export { isLeafNode, findNodePath, findNodeBySlugs, getFirstLeafPath } from './types';

import { acquisition } from './acquisition';
import { corpAcquisitionTax } from './corp-acquisition-tax';
import { property } from './property';
import { vehicle } from './vehicle';
import { redevelopment } from './redevelopment';
import type { Book } from './types';

/** 모든 책 */
export const allBooks: Book[] = [acquisition, corpAcquisitionTax, property, vehicle, redevelopment];

/** basePath로 책 찾기 */
export function getBookByPath(basePath: string): Book | undefined {
  return allBooks.find((b) => b.basePath === basePath);
}
