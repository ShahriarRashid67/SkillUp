const { sessions } = require('../../models');
module.exports = async (req, res) => {
  const { studentID } = req.body;
  const data = await sessions.findAll({
    where: { studentID },
    order: [['day', 'DESC']],
  });
  // console.log(studentID);
  data.reverse();
  // if (data.length !== 0) {
  //   return res.status(401).json({ error: 'No data found' });
  // }
  return res.json(data);
};
