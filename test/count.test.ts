import { count, limit } from "../src/scripts/counter";

test("given string 'a b c a b b' 'b' should be top 1, 'a' top 2 and 'c' top 3", () => {
  const input = "a b c a b b".split(" ");

  expect(count(input)).toStrictEqual({
    a: 2,
    b: 3,
    c: 1,
  });
});

test("limit to top 2", () => {
  const input = "a b c a b b".split(" ");
  const aggregated = count(input);
  expect(limit(aggregated, 2)).toStrictEqual([
    ["b", 3],
    ["a", 2],
  ]);
});
