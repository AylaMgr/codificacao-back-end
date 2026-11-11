import { IsString, IsNotEmpty, IsInt, Min, IsArray, ArrayMinSize } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    //Dados de entrada para criar um novo aluno
    @ApiProperty({
        example: 'Mateus Sousa',
        description: 'Nome completo do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message:'O nome é obrigatório e não pode estar vazio!'
    })
    nome: string;
    // Validação para garantir que a idade seja um número inteiro e não negativo
    @IsInt({
        message:'A idade deve ser um número inteiro'
    })
    @Min(0,{
        message:'A idade não pode ser negativa.'
    })
    @ApiProperty({
        example: 20,
        description: 'Idade do aluno',
    })
    idade: number;
    // Validação para garantir que a matrícula seja uma string não vazia
    @IsString()
    @IsNotEmpty({
        message:'A matrícula é obrigatória'
    })
    @ApiProperty({
        example: '9999',
        description: 'Matrícula do aluno',
    })
    matricula: string;
    // Validação para garantir que a lista de cursos seja um array de strings não vazio
    @IsString({each: true, message:'Cada curso deve ser um texto'})
    @ApiProperty({
        example: ['Ciencias da Computação', 'Letras'],
        description: 'Cursos em que o aluno está matriculado',
    })
    @IsArray()
    @ArrayMinSize(1,{
        message:'O aluno deve estar matriculado em pelo menos um curso'
    })
    cursos: string[];
}