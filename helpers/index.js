const sendResponse = (condition, res, status, message) => {
  if (condition) {
  return res.status(status).json({ message });
  }
};

module.exports = {
  sendResponse,
};
