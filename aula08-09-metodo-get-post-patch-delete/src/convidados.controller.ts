import { Controller, Get, Post,Body, Patch, Delete, Param, HttpCode} from "@nestjs/common";
import { CriarConvidadoDto } from "./criar-convidado.dto.js";
import { ConvidadosService } from "./convidados.service.js";

@Controller('convidados')
export class ConvidadosController {

    constructor(private readonly convidadoService: ConvidadosService) {}

    @Get()
    listarConvidados(){
        return this.convidadoService.listarConvidados();
    }

@Post()
criarConvidado(@Body() criarConvidado: CriarConvidadoDto){
    console.log(`[OPERADORA NAYRA] Novo convidado(a) registrado: ${criarConvidado.nome}`);

    return {
        mensagem: `Convidado(a) ${criarConvidado.nome} foi adicionado(a) com sucesso!`,
        dados: criarConvidado,
    }
}

@Patch(':id')
atualizarIdade(@Param('id') id: string, @Body('idade') idade: number){
    console .log(`[ADMINISTRADOR] Atualizando idade do(a) com ID ${id}.`);
    return this.convidadoService.atualizarIdade(+id, idade);
}

@Delete(':id')
@HttpCode(204)
removerConvidado(@Param('id') id: string){
    console.log(`[ADMINISTRADOR] Convidado(a) com ID ${id} removido(a) com Sucesso!`);
    this.convidadoService.removerConvidadoLista(+id);
}
}