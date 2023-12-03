import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  simple(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.uploadService.create(file);
  }
}
