const { expert } = require('../../models');

const { v4: uuidv4 } = require('uuid');
module.exports = async (req, res) => {
  const { course, mentor } = req.body;
  let mentorID = req.body.id;
  console.log('I am Adding');
  const data = await expert.findAll({ where: { course, mentor } });
  if (data.length !== 0) {
    return res.status(401).json({ error: 'Already added' });
  }
  try {
    // const instructor = await user.findAll({ where: { name: mentor } });
    // const { id } = instructor[0];
    // console.log(id);
    const id = uuidv4();
    const data = await expert.create({
      id,
      mentorID: req.body.id,
      mentor,
      course,
    });
    console.log(data);
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
