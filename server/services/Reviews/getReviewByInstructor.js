const { reviews } = require('../../models');
module.exports = async (req, res) => {
  let id = req.params.id;

  const data = await reviews.findAll({ where: { mentorID: id } });
  //   console.log(user);
  //   const data = await reviews.update(req.body, { where: { id: id } });
  // const user = await instructor.findAll({ where: { id: id } });

  return res.json(data);
};
