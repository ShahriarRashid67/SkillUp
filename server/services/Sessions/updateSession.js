const { sessions } = require('../../models');
module.exports = async (req, res) => {
  let id = req.params.id;

  //   const user = await instructor.findAll({ where: { id: id } });
  //   console.log(user);
  const data = await sessions.update(req.body, { where: { id: id } });
  // const user = await instructor.findAll({ where: { id: id } });

  return res.json(data);
};
