const express = require('express');
const bodyParser = require('body-parser');
const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkersById = require('./middlewares/getTalkersById');
const loginMiddleware = require('./middlewares/loginMiddleware');
const { 
  validateToken,
  validateName,
  validationAge,
  validateDataTalk,
  validateRateTalk,
  validateTalk, 
} = require('./middlewares/validationMiddlewares');
const createTalker = require('./middlewares/createTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/:id', getTalkersById);

app.get('/talker', getAllTalkers);

app.post('/login', loginMiddleware);

app.post('/talker', validateToken, validateName,
  validationAge, validateTalk, validateDataTalk, validateRateTalk, createTalker);

app.listen(PORT, () => {
  console.log('Online');
});
