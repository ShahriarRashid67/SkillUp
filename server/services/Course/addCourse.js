const { course } = require('../../models');
const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
  const { courseName } = req.body;
  const data = await course.findAll({ where: { courseName } });
  if (data.length !== 0) {
    return res.status(401).json({ error: 'Course Already Exist' });
  }
  try {
    const id = uuidv4();
    const data = await course.create({
      id,
      courseName,
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
