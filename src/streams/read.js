import { createReadStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { stdin, stdout } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  await pipeline(createReadStream(path), process.stdout);
  stdin.pipe(stdout);
};

await read();
