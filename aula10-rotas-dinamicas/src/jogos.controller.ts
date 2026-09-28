import {Controller, Get, Param} from '@nestjs/common';
import {JogosService} from './jogos.service.js';

@Controller('jogos')
export class JogosController {
    constructor(private readonly jogosService: JogosService) {}

    @Get(':id')
    buscarPorId(@Param('id') id: string) {
        const numId = +id;
        return this.jogosService.buscarPorId(numId);
    }
}