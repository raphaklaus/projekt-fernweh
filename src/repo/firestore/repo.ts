import { SentenceJSONL } from "../../interfaces/sentences_jsonl";
import { getDBInstance } from "./config";
import { map } from "../mappers/sentences";

const db = getDBInstance();

export const get = async () => {
  const sentencesRef = db.collection("sentences");
  const snapshots = await sentencesRef
    .orderBy("text")
    .startAt(0)
    .limit(10)
    .get();

  return snapshots.docs.map((x) => x.data());
};

export const bulkInsert = async (
  entities: {
    key: number;
    value: SentenceJSONL;
  }[]
) => {
  const batch = db.batch();
  const mapped_entities = map(entities.map((x) => x.value));

  mapped_entities.map(async (entity) => {
    const ref = db.collection("sentences").doc();
    batch.set(ref, entity);
  });

  await batch.commit();
};
