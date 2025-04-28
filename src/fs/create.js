import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation is failed");
  }
};

await create();
