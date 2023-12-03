import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multerConfig';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  simple(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.create(file);
  }
}
