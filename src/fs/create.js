import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young");
  } catch {
    throw new Error("FS operation is failed");
  }
};

await create();
