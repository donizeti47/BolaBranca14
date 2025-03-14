// routes/onibusRoutes.js
const express = require('express');
const router = express.Router();
const onibusController = require('../controllers/onibusController');

router.post('/', onibusController.criarOnibus);
router.get('/', onibusController.listarOnibus);
router.get('/:id', onibusController.buscarOnibusPorId);
router.put('/:id', onibusController.atualizarOnibus);
router.delete('/:id', onibusController.excluirOnibus);
router.get('/disponiveis', onibusController.listarOnibusDisponiveis);
router.get('/linha', onibusController.listarOnibusEmLinha);

//module.exports = router;


// routes/servicoRoutes.js
const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');

router.post('/', servicoController.criarServico);

module.exports = router;