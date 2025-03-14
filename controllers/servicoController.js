// controllers/servicoController.js
const Servico = require('../models/Servico');

// [POST] /onibus/servico
exports.criarServico = async (req, res) => {
  try {
    const servico = await Servico.create(req.body);
    res.status(201).json(servico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};