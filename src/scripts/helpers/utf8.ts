// I was planning to solve the encoding issue in the file
// but that took waaaaaaaay much of my time, so I will be heading
// to the other tasks.
export const toUTF8 = (string: string): string => {
  const codepoints = string.split("").map((x) => {
    const codepoint = x.codePointAt(0);
    if (codepoint === undefined) {
      throw "Empty character";
    }
    return codepoint;
  });

  return String.fromCodePoint(...codepoints);
};
