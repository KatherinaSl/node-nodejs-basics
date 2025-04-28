import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files");

const list = async () => {
  try {
    const files = await readdir(path);
    console.log(files);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await list();
