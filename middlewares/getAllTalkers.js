const fs = require('fs').promises;

const fileName = './talker.json';

const getAllTalkers = (_req, res) => {
  fs.readFile(fileName, 'utf8')
  .then((data) => {
    res.status(200).send(JSON.parse(data));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
    res.status(200).send([]);
  });
};

module.exports = getAllTalkers;