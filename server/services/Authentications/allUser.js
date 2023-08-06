const { user } = require('../../models');
module.exports = async (req, res) => {
  console.log('All user');
  const data = await user.findAll();
  console.log(data.length);
  return res.status(200).json(data);
};
