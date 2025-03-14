import express from 'express';
import onibusController from '../controllers/onibusController.js';

const app = express();

app.use(express.json());

app.get('/onibus', onibusController.listarOnibus);
app.get('/onibus/:id', onibusController.buscarOnibusPorId);
app.post('/onibus', onibusController.criarOnibus);
app.put('/onibus/:id', onibusController.atualizarOnibus);
app.delete('/onibus/:id', onibusController.deletarOnibus);

app.listen(3000, 'localhost', () => {
    console.log('Servidor rodando em http://localhost:3000');
});