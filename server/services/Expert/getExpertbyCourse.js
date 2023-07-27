const { expert } = require('../../models');

module.exports = async (req, res) => {
  const { course } = req.body;
  const data = await expert.findAll({ where: { course } });
  if (data.length === 0) {
    return res.status(400).json({ error: 'No mentor found' });
  }
  return res.status(200).json(data);
};
