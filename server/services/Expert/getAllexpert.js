const { expert } = require('../../models');
module.exports = async (req, res) => {
  const data = await expert.findAll();
  console.log(data);
  return res.status(200).json(data);
};
