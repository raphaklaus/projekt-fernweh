import { Sentence } from "../../interfaces/sentences";
import { SentenceJSONL } from "../../interfaces/sentences_jsonl";
import { getDBInstance } from "./config";
import { map } from "../mappers/sentences";

const db = getDBInstance();

export const bulkInsert = async (entities: SentenceJSONL[]) => {
  const batch = db.batch();
  const mapped_entities = map(entities);

  mapped_entities.map(async (entity) => {
    const ref = db.collection("sentences").doc();
    batch.set(ref, entity);
  });

  await batch.commit();
};
