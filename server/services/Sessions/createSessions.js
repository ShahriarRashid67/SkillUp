const { v4: uuidv4 } = require('uuid');
const { sessions } = require('../../models');
var crypto = require('crypto');

module.exports = async (req, res) => {
  const { studentID, mentorID, day, time } = req.body;
  const data = await sessions.findAll({ where: { studentID, mentorID, day } });
  // if (data.length !== 0) {
  //   return res.status(401).json({ error: 'Already added' });
  // }

  try {
    const id = uuidv4();
    var room = crypto.randomBytes(20).toString('hex');
    const data = await sessions.create({
      id,
      studentID,
      mentorID,
      mentorStatus: 'Pending',
      roomID: room,
      day,
      time,
    });
    console.log(data);
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
