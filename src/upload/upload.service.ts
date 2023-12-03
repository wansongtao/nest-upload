import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  create(file: Express.Multer.File) {
    if (!file) {
      return {
        code: 400,
        message: 'Only image files are allowed!'
      };
    }

    return {
      code: 200,
      data: {
        url: `http://localhost:3000/static/${file.filename}`
      },
      message: 'success'
    };
  }
}
