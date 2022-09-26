import Batch from 'stream-json/utils/Batch';
import { parser } from 'stream-json/jsonl/Parser'
import StreamArray from 'stream-json/streamers/StreamArray';
import { chain } from 'stream-chain';
import { Sentence } from '../../interfaces/sentences';
import fs from 'fs'

const batchSize = 500

export const stream = (filePath:string, bulkInsert:Function) => {
  const pipeline = chain([
    fs.createReadStream(filePath),
    parser(),
    // StreamArray.withParser(),
    new Batch({batchSize})
  ]);

  pipeline.on('data', (data:Sentence[]) => {
    console.log(`Importing ${data.length} entities...`)
    bulkInsert(data);
  });
  pipeline.on('end', () => console.log("Import completed"));
}
