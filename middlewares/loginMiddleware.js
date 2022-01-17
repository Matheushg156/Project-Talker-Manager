const crypto = require('crypto');
const { sendResponse } = require('../helpers');

const loginMiddleware = (req, res) => {
  const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString('hex');
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  sendResponse(!email, res, 400, 'O campo "email" é obrigatório');
  sendResponse(!emailRegex.test(email), res, 400, 'O "email" deve ter o formato "email@email.com"');
  sendResponse(!password, res, 400, 'O campo "password" é obrigatório');
  sendResponse(password.length < 6, res, 400, 'O "password" deve ter pelo menos 6 caracteres');

  return res.status(200).json({ token });
};

module.exports = loginMiddleware;

/** Dica do Michael: 
 * Source: https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/ */