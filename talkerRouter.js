const express = require('express');
const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkersById = require('./middlewares/getTalkersById');
const { 
  validateToken,
  validateName,
  validationAge,
  validateDataTalk,
  validateRateTalk,
  validateTalk, 
} = require('./middlewares/validationMiddlewares');
const createTalker = require('./middlewares/createTalker');
const editTalker = require('./middlewares/editTalker');
const deleteTalker = require('./middlewares/deleteTalker');
const searchTalker = require('./middlewares/searchTalker');

const router = express.Router();

router.get('/search', validateToken, searchTalker);
router.get('/:id', getTalkersById);
router.get('/', getAllTalkers);
router.post('/', validateToken, validateName,
validationAge, validateTalk, validateDataTalk, validateRateTalk, createTalker);
router.put('/:id', validateToken, validateName,
validationAge, validateTalk, validateDataTalk, validateRateTalk, editTalker);
router.delete('/:id', validateToken, deleteTalker);

module.exports = router;