const { sessions } = require('../../models');
module.exports = async (req, res) => {
  const { mentorID } = req.body;
  const data = await sessions.findAll({
    where: { mentorID },
    order: [['day', 'DESC']],
  });
  data.reverse();
  // if (data.length !== 0) {
  //   return res.status(401).json({ error: 'No data found' });
  // }
  return res.json(data);
};
