export const compareDate = (a: Date, b: Date): boolean =>
  a.getTime() > b.getTime();

export const generateRandomString = (length: number): string =>
  Array(length)
    .fill('')
    .map(() => Math.random().toString(36).charAt(2))
    .join('');
