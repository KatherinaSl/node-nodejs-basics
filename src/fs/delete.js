import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rm } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await rm(path);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await remove();
