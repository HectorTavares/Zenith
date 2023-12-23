export const getArrayByNumber = (number: number): Array<number> => {
  const options: Array<number> = [];
  for (let i = 1; i <= number; i++) {
    options.push(i);
  }

  return options;
};
