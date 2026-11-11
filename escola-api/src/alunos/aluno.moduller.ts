import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlunosController } from "./aluno.controller.js";
import { AlunosService } from "./aluno.service.js";
import { AlunoSchema, Aluno } from "./schemas/aluno.schema.js";

@Module({
    imports:[
        MongooseModule.forFeature([{
            name: Aluno.name, schema: AlunoSchema
        }])
    ],
    controllers:[AlunosController],
    providers:[AlunosService],
})
export class AlunosModule {}