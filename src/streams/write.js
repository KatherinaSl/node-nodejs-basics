import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writableStream = fs.createWriteStream(path);
  process.stdin.pipe(writableStream);
};

await write();
