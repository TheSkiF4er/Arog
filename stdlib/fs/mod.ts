/**
 * Простейшая заглушка файловых операций Farog.
 */
export function readTextFile(path: string): Promise<string> {
  console.log(`farog/fs.readTextFile('${path}') — заглушка.`);
  return Promise.resolve("");
}
