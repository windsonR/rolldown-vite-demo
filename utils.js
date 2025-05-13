import config from './config.js';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const {aaa} = config
const {bbb} = aaa
export const __dirname = resolve(dirname(fileURLToPath(import.meta.url)), './');
// comment here
const ccc = await import('./config.js')
export async function getEnv() {
  // comment here
  console.log(111,ccc);
  return bbb[0];
}
