import { Controller, Post, Body, UsePipes } from "@nestjs/common";
import { colaboradorSchema } from "./colaborador.schema.js";
import type { Colaborador } from "./colaborador.schema.js";
import { ZodValidationPipe } from "./zod-validation.pipe.js";

@Controller('Colaboradores')
export class colaboradoresController {
    @Post()
    @UsePipes(new ZodValidationPipe(colaboradorSchema))
    async create (@Body() body: Colaborador){
        return {
            mensagem: 'Colaborador cadastrado com sucesso',
            dados: body,
        }
    }
}