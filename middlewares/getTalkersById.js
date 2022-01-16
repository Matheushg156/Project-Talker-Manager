const fs = require('fs').promises;

const fileName = './talker.json';

const getTalkersById = async (_req, res) => {
  const { id } = _req.params;
  const talkers = await fs.readFile(fileName, 'utf8');
  const filteredTalkers = JSON.parse(talkers).find((talker) => talker.id === parseInt(id, 10));
  if (!filteredTalkers) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(filteredTalkers);
};

module.exports = getTalkersById;