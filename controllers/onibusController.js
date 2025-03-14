// controllers/onibusController.js
const Onibus = require('../models/Onibus');

// [POST] /onibus
exports.criarOnibus = async (req, res) => {
  try {
    const onibus = await Onibus.create(req.body);
    res.status(201).json(onibus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [GET] /onibus
exports.listarOnibus = async (req, res) => {
  try {
    const onibus = await Onibus.findAll();
    res.json(onibus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [GET] /onibus/{id}
exports.buscarOnibusPorId = async (req, res) => {
  try {
    const onibus = await Onibus.findByPk(req.params.id);
    if (onibus) {
      res.json(onibus);
    } else {
      res.status(404).json({ message: 'Ônibus não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [PUT] /onibus/{id}
exports.atualizarOnibus = async (req, res) => {
  try {
    const [atualizado] = await Onibus.update(req.body, {
      where: { numeroCarro: req.params.id },
    });
    if (atualizado) {
      const onibusAtualizado = await Onibus.findByPk(req.params.id);
      res.json(onibusAtualizado);
    } else {
      res.status(404).json({ message: 'Ônibus não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [DELETE] /onibus/{id}
exports.excluirOnibus = async (req, res) => {
  try {
    const excluido = await Onibus.destroy({
      where: { numeroCarro: req.params.id },
    });
    if (excluido) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Ônibus não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [GET] /onibus/disponiveis
exports.listarOnibusDisponiveis = async (req, res) => {
  try {
    // Implemente a lógica para listar ônibus disponíveis
    // Consulte a tabela de serviços para verificar quais ônibus estão em serviço
    res.json([]); // Substitua pela lógica real
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [GET] /onibus/linha
exports.listarOnibusEmLinha = async (req, res) => {
  try {
    // Implemente a lógica para listar ônibus em linha
    // Consulte a tabela de serviços para verificar quais ônibus estão em serviço
    res.json([]); // Substitua pela lógica real
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};