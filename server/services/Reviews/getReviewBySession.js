const { reviews } = require('../../models');
module.exports = async (req, res) => {
  let id = req.params.id;

  const data = await reviews.findAll({ where: { id } });
  console.log('Data', data);
  //   console.log(user);
  //   const data = await reviews.update(req.body, { where: { id: id } });
  // const user = await instructor.findAll({ where: { id: id } });
  if (data.length === 0) {
    console.log('Here review');
    return res.json({ id: id });
  }
  return res.json(data);
};
