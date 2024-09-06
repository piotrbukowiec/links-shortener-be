import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Redirect,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Controller({
  host: process.env.APP_HOST,
})
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.FOUND)
  async findAll() {
    return this.linksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.linksService.findOne(id);
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
  //   return this.linksService.update(id, updateLinkDto);
  // }

  // @Get('/redirect/:shortUrl')
  // @HttpCode(HttpStatus.PERMANENT_REDIRECT)
  // @Redirect()
  // async redirect(@Param('shortUrl') shortUrl: string) {
  //   return this.linksService.redirect(shortUrl);
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.linksService.remove(id);
  }
}
