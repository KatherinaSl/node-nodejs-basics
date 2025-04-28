import { cp, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = join(__dirname, "files");
const destPath = join(__dirname, "files_copy");

const copy = async () => {
  try {
    await mkdir(destPath);
    await cp(srcPath, destPath, {
      recursive: true,
    });
  } catch {
    throw new Error("FS operation is failed");
  }
};

await copy();
