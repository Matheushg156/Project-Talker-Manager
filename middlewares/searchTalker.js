const fs = require('fs').promises;
const rescue = require('express-rescue');

const fileName = './talker.json';

const searchTalker = rescue(async (req, res) => {
  const { q } = req.query;
  const talkers = JSON.parse(await fs.readFile(fileName, 'utf8'));
  if (!q) {
    return res.status(200).json(talkers);
  }
  const filteredTalkers = talkers.filter((talker) => talker.name.includes(q));
  if (!filteredTalkers) {
    return res.status(200).json([]);
  }
  res.status(200).json(filteredTalkers);
});

module.exports = searchTalker;