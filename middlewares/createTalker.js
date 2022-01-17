const fs = require('fs').promises;
const rescue = require('express-rescue');

const fileName = './talker.json';

const createTalker = rescue(async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = JSON.parse(await fs.readFile(fileName, 'utf8'));
  const id = talkers.length + 1;
  const newTalker = { id, name, age, talk };
  await fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalker]));
  return res.status(201).send(newTalker);
});

module.exports = createTalker;