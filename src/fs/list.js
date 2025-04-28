import { readdir } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files");

const list = async () => {
  try {
    const files = await readdir(path);
    for (const file of files) console.log(file);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await list();
