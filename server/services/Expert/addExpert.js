const { expert, user } = require('../../models');
module.exports = async (req, res) => {
  const { course, mentor } = req.body;
  const data = await expert.findAll({ where: { course, mentor } });
  if (data.length !== 0) {
    return res.status(401).json({ error: 'Already added' });
  }
  try {
    const instructor = await user.findAll({ where: { name: mentor } });
    const { id } = instructor[0];
    console.log(id);
    const data = await expert.create({
      id,
      mentor,
      course,
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
