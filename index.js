const express = require('express');
const bodyParser = require('body-parser');
const loginMiddleware = require('./middlewares/loginMiddleware');

const routerTalker = require('./talkerRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', routerTalker);

app.post('/login', loginMiddleware);

app.listen(PORT, () => {
  console.log('Online');
});
