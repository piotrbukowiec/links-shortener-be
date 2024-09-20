import {
  Controller,
  forwardRef,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LinksService } from './links/links.service';
import { ValidateStringParamPipe } from './pipes/string-param-validation/string-param-validation.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AppController')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    @Inject(forwardRef(() => LinksService))
    private readonly linksService: LinksService,
  ) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getHello() {
    return this.appService.getHello();
  }

  @Get('/redirect/:shortUrl?')
  @HttpCode(HttpStatus.PERMANENT_REDIRECT)
  @Redirect()
  async redirect(@Param('shortUrl', ValidateStringParamPipe) shortUrl: string) {
    return this.linksService.redirect(shortUrl);
  }
}
