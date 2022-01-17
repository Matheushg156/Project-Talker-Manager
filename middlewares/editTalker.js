const fs = require('fs').promises;
const rescue = require('express-rescue');

const fileName = './talker.json';

const editTalker = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = JSON.parse(await fs.readFile(fileName, 'utf8'));
  const filterdTalkers = talkers.filter((talker) => talker.id !== id);
  const editedTalker = { id: Number(id), name, age, talk };
  await fs.writeFile('./talker.json', JSON.stringify([...filterdTalkers, editedTalker]));
  return res.status(200).json(editedTalker);
});

module.exports = editTalker;