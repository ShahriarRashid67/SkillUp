const { instructor } = require('../../models');
module.exports = async (req, res) => {
  let id = req.params.id;
  const user = await instructor.findOne({ where: { id: id } });
  //   console.log(user);
  //   const data = await instructor.update(req.body, { where: { id: id } });
  // const user = await instructor.findAll({ where: { id: id } });

  return res.json(user);
};
