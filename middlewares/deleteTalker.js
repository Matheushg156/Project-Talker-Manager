const fs = require('fs').promises;
const rescue = require('express-rescue');

const fileName = './talker.json';

const editTalker = rescue(async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await fs.readFile(fileName, 'utf8'));
  const filteredTalkers = talkers.filter((talker) => talker.id !== Number(id));
  await fs.writeFile('./talker.json', JSON.stringify(filteredTalkers));
  return res.status(204).end();
});

module.exports = editTalker;