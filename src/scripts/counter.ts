type rank = {
  [key: string]: number;
};

export const count = (listOfWords: string[]) => {
  return listOfWords.reduce((prev, cur) => {
    return { ...prev, [cur]: (prev[cur] || 0) + 1 };
  }, {} as rank);
};

export const limit = (rank: rank, limit: number) => {
  return Object.entries(rank)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, limit);
};
