const { sessions } = require('../../models');
module.exports = async (req, res) => {
  // const { studentID } = req.body;
  const data = await sessions.findAll({ order: [['day', 'DESC']] });

  // if (data.length !== 0) {
  //   return res.status(401).json({ error: 'No data found' });
  // }
  return res.json(data);
};
