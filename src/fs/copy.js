import { copyFile } from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = join(__dirname, "files", "fresh.txt");
const destPath = join(__dirname, "files", "files_copy.txt");

const copy = async () => {
  try {
    await copyFile(srcPath, destPath);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await copy();
