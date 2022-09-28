import { IMap } from "./map";

export const count = (listOfWords: string, state: IMap<string, number>) => {
  return (listOfWords.match(/\p{L}+/gu) || []).reduce(
    (prev: IMap<string, number>, cur: string) => {
      let occurrences = prev.get(cur) || 0;
      prev.set(cur, occurrences + 1);
      return prev;
    },
    state as IMap<string, number>
  );
};

export const rank = (countedWords: IMap<string, number>, limit: number) => {
  return new Map(
    [...countedWords.entries()]
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .slice(0, limit)
  ) as IMap<string, number>;
};

export const print = (topWords: IMap<string, number>) => {
  const topWordsAsString = Array.from(topWords)
    .map((pair) => {
      return `${pair[0]}: ${pair[1]} occurrences`;
    })
    .join("\n");

  console.log(topWordsAsString);
};
