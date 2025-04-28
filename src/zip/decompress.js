import fs from "fs";
import zlib from "zlib";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

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
