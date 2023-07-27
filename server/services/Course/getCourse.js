const { course } = require('../../models');
module.exports = async (req, res) => {
  const data = await course.findAll();
  console.log(data);
  return res.status(200).json(data);
};
