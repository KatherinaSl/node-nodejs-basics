import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rename as fsRename } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldPath = join(__dirname, "files", "wrongFilename.txt");
const newPath = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fsRename(oldPath, newPath);
  } catch {
    throw new Error("FS operation is failed");
  }
};

await rename();
