import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
import { createReadStream } from "fs";
import { createHash } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const input = createReadStream(path);
  await pipeline(input, hash);

  const digest = hash.digest("hex");
  console.log(digest);
};

await calculateHash();
