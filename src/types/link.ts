interface ICreateLinkDto {
  longUrl: string;
}

interface ICreateLinkResponse {
  shortUrl: string;
}

export { ICreateLinkDto, ICreateLinkResponse };
