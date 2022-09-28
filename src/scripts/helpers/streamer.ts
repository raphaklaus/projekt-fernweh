import Batch from "stream-json/utils/Batch";
import { parser as parserJSONL } from "stream-json/jsonl/Parser";
import { chain } from "stream-chain";
import fs from "fs";
import { SentenceJSONL } from "../../interfaces/sentences_jsonl";
import { IMap } from "./map";

type StreamOpts = {
  count: (text: string, state: IMap<string, number>) => IMap<string, number>;
  rank: (
    countedWords: IMap<string, number>,
    limit: number
  ) => IMap<string, number>;
  print: (rankedWords: IMap<string, number>) => void;
};

export const stream = (filePath: string, opts: StreamOpts) => {
  const pipeline = chain([fs.createReadStream(filePath), parserJSONL()]);

  let accumulator = new Map<string, number>() as IMap<string, number>;
  pipeline.on("data", (data: { key: number; value: SentenceJSONL }) => {
    console.log(data.key);
    accumulator = opts.count(data.value.text, accumulator);
  });
  pipeline.on("end", () => {
    const ranked = opts.rank(accumulator, 100);
    opts.print(ranked);
  });
};

const batchSize = 500;

export const streamBatch = (filePath: string, fn: Function) => {
  const pipeline = chain([
    fs.createReadStream(filePath),
    parserJSONL(),
    new Batch({ batchSize }),
  ]);

  pipeline.on("data", (data: SentenceJSONL[]) => {
    console.log(`Importing ${data.length} entities...`);
    fn(data);
  });
  pipeline.on("end", () => console.log("Import completed"));
};
