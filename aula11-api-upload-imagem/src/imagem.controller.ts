import {Controller, Post, UseInterceptors, UploadedFiles, BadRequestException, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {v4 as uuidv4} from 'uuid';
import { extname } from 'path';

@Controller('imagem')
export class ImagemController {
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file',{
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const nomeArquivo = `${uuidv4()}${extname(file.originalname)}`;
                },
            }),
            limits: {
                fieldSize: 2 * 1024 * 1024
            },
            fileFilter: (req, file, callback) =>{
                if(!file.mimetype.match(/\/(jpg | jpeg | png | gif | webp)$/)){
                    return callback(
                        new BadRequestException('Apenas arquivos jpg, jpeg, png, gif e webp são suportados!'),
                        false,
                    );
                }
                callback(null, true);
            }
        }),
    )
    UploadedFiles(@UploadedFile() File: Express.Multer.File){
    if(!File) {
        throw new BadRequestException('Nenhum arquivo enviado.');
    }
    return {
        filename: File.filename,
        size: File.size,
        url: `http://localhost:3000/api/uploads/${File.filename}`
    };
}
}