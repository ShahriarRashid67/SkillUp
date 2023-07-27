const CryptoJS = require('crypto-js');
const { user } = require('../../models');
const secretkey = '123213211';
// SECRET_KEY = '123213211';
// '123213211';

module.exports = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const data = await user.findAll({ where: { id } });
  if (data.length === 0) {
    console.log('Not found');
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  return res.status(200).json(data);
};
