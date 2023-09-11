const { expert, pendingCourse } = require('../../models');

const { v4: uuidv4 } = require('uuid');
module.exports = async (req, res) => {
  console.log('Des');
  const { course, mentorID, mentor } = req.body;
  const expData = await expert.findAll({ where: { mentorID, course } });
  if (expData.length !== 0) {
    return res.status(400).json('Course Already addded!');
  }
  const id = uuidv4();
  const exp = await expert.create({
    id,
    mentorID,
    mentor,
    course,
  });
  console.log('add exp', exp);

  const data = await pendingCourse.destroy({
    where: { courseName: course, mentorID },
  });

  return res.status(200).json('HI');
};
