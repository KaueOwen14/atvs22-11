// Simula banco de dados
let veiculos = [];

exports.getAllVeiculos = (req, res) => {
  res.json(veiculos);
};

exports.createVeiculo = (req, res) => {
  const novoVeiculo = req.body;
  veiculos.push(novoVeiculo);
  res.status(201).json(novoVeiculo);
};

exports.updateVeiculo = (req, res) => {
  const { id } = req.params;
  const index = veiculos.findIndex((v) => v.id === id);
  if (index === -1) return res.status(404).json({ error: "Veículo não encontrado" });

  veiculos[index] = { ...veiculos[index], ...req.body };
  res.json(veiculos[index]);
};

exports.deleteVeiculo = (req, res) => {
  const { id } = req.params;
  veiculos = veiculos.filter((v) => v.id !== id);
  res.status(204).send();
};
