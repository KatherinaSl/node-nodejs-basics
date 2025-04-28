import fs from "node:fs";
import zlib from "node:zlib";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, "files", "fileToCompress.txt");
const pathToArchive = join(__dirname, "files", "archive.gz");

const compress = async () => {
  let fileStream = fs.createReadStream(pathToFile);
  let archiveStream = fs.createWriteStream(pathToArchive);

  let compress = zlib.createGzip();
  fileStream.pipe(compress).pipe(archiveStream);
};

await compress();
