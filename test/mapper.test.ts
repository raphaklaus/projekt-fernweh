import { map } from "../src/repo/mappers/sentences";

test("given JSONL data, returns mapped Sentence data structure", () => {
  const raw = [{ text: "test", cats: { tech: 1 } }];
  expect(map(raw)).toStrictEqual([
    {
      text: "test",
      categories: [{ name: "tech", value: 1 }],
    },
  ]);
});
