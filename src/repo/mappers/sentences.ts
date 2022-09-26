import { Sentence } from "../../interfaces/sentences";
import { SentenceJSONL } from "../../interfaces/sentences_jsonl";

export const map = (rawEntities: SentenceJSONL[]): Sentence[] => {
  return rawEntities.map((rawEntity) => {
    return {
      text: rawEntity.text,
      categories: Object.keys(rawEntity.cats).map((cat) => {
        return {
          name: cat,
          value: rawEntity.cats[cat],
        };
      }),
    };
  });
};
