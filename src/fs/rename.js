import { join, dirname } from "path";
import { fileURLToPath } from "url";
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
