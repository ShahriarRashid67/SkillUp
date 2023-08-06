const { v4: uuidv4 } = require('uuid');
const { reviews } = require('../../models');
// const reviews = require('../../models/reviews');

module.exports = async (req, res) => {
  const { studentID, mentorID, courseName, star, details } = req.body;
  console.log(req.body);
  try {
    const id = uuidv4();
    console.log('object', id);
    const data = await reviews.create({
      id,
      studentID,
      mentorID,
      courseName,
      star,
      details,
    });
    console.log(data);
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
