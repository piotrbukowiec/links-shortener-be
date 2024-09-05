import { getRandNum } from './get-rand-num';

export const generateRandStr = (length: number = 5): string => {
  const characters: string =
    'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';

  const maxCharacterIndex = characters.length - 1;

  let text: string = '';

  for (let i = 0; i < length; i++)
    text += characters[getRandNum(0, maxCharacterIndex)];

  return text;
};
