const CryptoJS = require('crypto-js');
const { instructor } = require('../../models');
const secretkey = '123213211';
// SECRET_KEY = '123213211';
// '123213211';

module.exports = async (req, res) => {
  const data = await instructor.findAll({ where: { status: 'Pending' } });
  return res.status(200).json(data);
};
