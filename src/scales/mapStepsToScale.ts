const Major = [0, 2, 4, 5, 7, 9, 11];

export const mapStepsToScale = (
  rootNote: string,
  steps: number[]
): string[] => {
  const allNotes = [
    "c",
    "cs",
    "d",
    "ds",
    "e",
    "f",
    "fs",
    "g",
    "gs",
    "a",
    "as",
    "b"
  ];
  const shiftedIndexes = [
    ...allNotes.slice(allNotes.indexOf(rootNote), allNotes.length),
    ...allNotes.slice(0, allNotes.indexOf(rootNote))
  ];
  return steps.map(step => shiftedIndexes[step]);
};
