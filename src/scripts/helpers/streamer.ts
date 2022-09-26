import Batch from "stream-json/utils/Batch";
import { parser } from "stream-json/jsonl/Parser";
import { chain } from "stream-chain";
import { Sentence } from "../../interfaces/sentences";
import fs from "fs";

const batchSize = 500;

export const stream = (filePath: string, fn: Function) => {
  const pipeline = chain([fs.createReadStream(filePath), parser()]);
  let count = 0;

  pipeline.on("data", (data: Sentence) => {
    data.text.split(" ").reduce(prev, (cur) => {
      prev;
    });
  });
  pipeline.on("end", () => console.log("Count completed"));
};

export const streamBatch = (filePath: string, fn: Function) => {
  const pipeline = chain([
    fs.createReadStream(filePath),
    parser(),
    new Batch({ batchSize }),
  ]);

  pipeline.on("data", (data: Sentence[]) => {
    console.log(`Importing ${data.length} entities...`);
    fn(data);
  });
  pipeline.on("end", () => console.log("Import completed"));
};
