import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await readFile(path, { encoding: "utf8" });
    console.log(content);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await read();
