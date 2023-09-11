const { expert } = require('../../models');

module.exports = async (req, res) => {
  console.log('Mentor');
  const mentorID = req.params.id;
  //   const  = req.params.mentor;
  //   console.log(mentorID);
  const data = await expert.findAll({ where: { mentorID } });

  // if (data.length === 0) {
  //   console.log('No course found');
  //   return res.status(400).json(data);
  // }
  return res.status(200).json(data);
};
