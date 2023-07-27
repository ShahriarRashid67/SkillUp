const CryptoJS = require('crypto-js');
const { user } = require('../../models');
const secretkey = '123213211';
// SECRET_KEY = '123213211';
// '123213211';

module.exports = async (req, res) => {
  console.log('In service');
  try {
    const { email, password } = req.body;
    const data = await user.findAll({ where: { email } });
    console.log(data.length);

    if (data.length === 0) {
      console.log('Not found');
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const bytes = CryptoJS.AES.decrypt(data[0].password, secretkey);
    const newPassword = bytes.toString(CryptoJS.enc.Utf8);
    console.log(newPassword, password);
    if (newPassword !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
