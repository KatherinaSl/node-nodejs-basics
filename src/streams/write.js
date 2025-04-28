import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writableStream = fs.createWriteStream(path);
  process.stdin.pipe(writableStream);
};

await write();
