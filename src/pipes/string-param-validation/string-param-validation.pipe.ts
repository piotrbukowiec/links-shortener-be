import { PipeTransform, BadRequestException } from '@nestjs/common';

export class ValidateStringParamPipe implements PipeTransform {
  transform(value: any) {
    console.log('VALUE: ', value);
    if (!value) throw new BadRequestException('Param is missing');
    if (typeof value !== 'string')
      throw new BadRequestException('Param is not a string');
    return value;
  }
}
