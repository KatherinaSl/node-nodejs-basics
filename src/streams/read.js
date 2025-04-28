import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
import { stdin, stdout } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  await pipeline(createReadStream(path), process.stdout);
  stdin.pipe(stdout);
};

await read();
