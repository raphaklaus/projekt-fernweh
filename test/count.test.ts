import { count, rank } from "../src/scripts/helpers/counter";
import { IMap } from "../src/scripts/helpers/map";

test("given string inputs it count words accumulating state", () => {
  const input = "a b c a b b";
  const first_state = count(input, new Map());
  expect(first_state).toStrictEqual(
    new Map([
      ["b", 3],
      ["a", 2],
      ["c", 1],
    ])
  );

  const second_state = count("a a a", first_state);

  expect(second_state).toStrictEqual(
    new Map([
      ["b", 3],
      ["a", 5],
      ["c", 1],
    ])
  );
});

test("given a Map, it should rank by value top N values", () => {
  const map = new Map<string, number>([
    ["a", 2],
    ["c", 1],
    ["b", 3],
  ]);

  expect(rank(map as IMap<string, number>, 2)).toStrictEqual(
    new Map([
      ["b", 3],
      ["a", 2],
    ])
  );
});
