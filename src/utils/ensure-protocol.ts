import * as URL from 'url-parse';
export const ensureProtocol = (url: string) =>
  new URL(url).protocol ? url : 'http://' + url;
