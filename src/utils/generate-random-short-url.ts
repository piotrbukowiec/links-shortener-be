import { LinkEntity } from 'src/links/entities/link.entity';
import { generateRandStr } from 'src/utils/generate-rand-str';

export const generateUniqueShortUrl = async (
  length = 5,
  attempts = 20,
): Promise<string> => {
  for (let i = 0; i < attempts; i++) {
    const randomStr = generateRandStr(length);

    const isUnique = !(await LinkEntity.findOneBy({ shortUrl: randomStr }));

    if (isUnique) return randomStr;
  }

  return await generateUniqueShortUrl(length + 1, attempts); // Dodane await dla poprawnej obsługi rekurencji
};
