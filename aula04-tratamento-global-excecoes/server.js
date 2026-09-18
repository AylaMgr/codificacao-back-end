import express from "express";
const app = express();
app.use(express.json());
 process.on("uncaughtException", (err) => {
    console.error('[ERRO NÃO CAPTURADO - uncaughtException]:', err.message);});

    process.on('unhandledRejection', (reason)=>{
    console.error('[PROMISE REJEITADA - unhandledRejection]:', reason)});

    app.get('/sucesso', (req, res) => {
        res.json({success: true, message: 'Requisição bem sucedida!'});
});
    app.get('/erro-sincrono', (req, res, next) => {
        try{
            throw new Error('Erro síncrono!');
        }catch(err){
            next(err);
        }
    });
     app.get('/erro-assincrono', async (req, res, next) => {
        try{
            await Promise.reject(new Error('Erro na consulta no banco de dados externo!'));
        }catch(err){
            next(err);
        }
    });

    app.use((err, req, res, next) => {
        console.error(`[LOG DE ERRO]: ${err.stack}`);
        const status = err.status || 500;
        res.status(status).json({
            success: false,
            message: err.message || 'Erro interno do servidor'
        });
    });

    app.listen(3000, () => {
        console.log('Servidor imortal rodando na porta 3000');
    });