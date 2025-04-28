import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { unlink } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await unlink(path);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await remove();
