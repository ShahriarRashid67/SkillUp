const { sessions } = require('../../models');
module.exports = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const data = await sessions.findAll({ where: { id } });
  // if (data.length !== 0) {
  //   return res.status(401).json({ error: 'No data found' });
  // }
  return res.json(data);
};
