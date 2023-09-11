const { pendingCourse } = require('../../models');
module.exports = async (req, res) => {
  const { course, mentorID } = req.body;
  const data = await pendingCourse.findAll({
    where: { courseName: course, mentorID },
  });
  if (data.length !== 0) {
    return res.status(401).json({ error: 'Already added' });
  }
  try {
    const data = await pendingCourse.create({
      mentorID,
      courseName: course,
    });
    console.log('Course added for pending', data);
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
