const { user } = require('../../models');
module.exports = async (req, res) => {
  let id = req.params.id;
  const data1 = await user.destroy({ where: { id } });
  //   const data2 = await user.destroy({ where: { id } });
  //   console.log(user);
  //   const data = await instructor.update(req.body, { where: { id: id } });
  // const user = await instructor.findAll({ where: { id: id } });

  return res.status(200).json({ 'massage:': 'User deleted' });
};
