import fs from "node:fs";
import zlib from "node:zlib";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, "files", "fileToCompress.txt");
const pathToArchive = join(__dirname, "files", "archive.gz");

const decompress = async () => {
  let archiveStream = fs.createReadStream(pathToArchive);
  let fileStream = fs.createWriteStream(pathToFile);

  let decompress = zlib.createGunzip();
  archiveStream.pipe(decompress).pipe(fileStream);
};

await decompress();
