import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Links')
@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.linksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.linksService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.linksService.remove(id);
  }
}
