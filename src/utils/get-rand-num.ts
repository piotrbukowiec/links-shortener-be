export const getRandNum = (min: number = 0, max: number = 100): number => {
  if (min > max) throw new Error('Minimum value must be lower than maximum');
  return Math.floor(Math.random() * (max - min)) + min;
};
