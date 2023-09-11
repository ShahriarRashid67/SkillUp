const { pendingCourse } = require('../../models');
module.exports = async (req, res) => {
  const data = await pendingCourse.findAll();

  return res.status(200).json(data);
};
