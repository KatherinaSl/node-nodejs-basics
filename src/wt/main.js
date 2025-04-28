import os from "os";
import { Worker } from "worker_threads";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, "worker.js");

const performCalculations = async () => {
  const threadsNum = os.cpus().length;
  const promises = new Array();

  for (let i = 0; i < threadsNum; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path, { workerData: 10 + i });
        worker.on("message", (result) =>
          resolve({ status: "resolved", data: result })
        );
        worker.on("error", () => reject({ status: "error", data: null }));
      })
    );
  }
  return Promise.allSettled(promises).then((value) =>
    console.log(value.map((result) => result.value))
  );
};

await performCalculations();