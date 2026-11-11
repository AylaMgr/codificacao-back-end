import { PipeTransform,
         ArgumentMetadata,
         BadRequestException } from "@nestjs/common";
import { z } from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private z: z.ZodType){}
    transform(value: unknown, metadata: ArgumentMetadata) {
        if(metadata.type ! == 'body') return value;
        const parceResult = this.z.safeParse(value);
        if(!parceResult.success){
            const formattedErros = parceResult.error.issues.map((issue) =>({
                campo: issue.path.join('.'),
                mensagem: issue.message,
            }));
            throw new BadRequestException({
                statusCode: 400,
                erros: formattedErros,
            });
        }
        return parceResult.data;
    }
}