import { Transform } from "stream";

const transform = async () => {
  const transformData = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });

  process.stdin.pipe(transformData).pipe(process.stdout);
};

await transform();
