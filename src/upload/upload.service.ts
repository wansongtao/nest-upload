import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  create(file: Express.Multer.File) {
    return {
      code: 200,
      data: {
        name: file.originalname
      },
      message: 'success'
    };
  }
}
