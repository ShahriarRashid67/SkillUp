const { user, instructor } = require('../../models');
const CryptoJS = require('crypto-js');
const secretkey = '123213211';
const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
  const { name, email, password, role } = req.body;
  const data = await user.findAll({ where: { email } });
  if (data.length !== 0) {
    return res.status(401).send('User Already exists');
  }

  try {
    const id = uuidv4();
    if (role == 'Instructor') {
      const data = await instructor.create({
        id,
        status: 'Pending',
        hourRate: '0',
        noSession: '0',
        rating: '0',
      });
      console.log(data);
    }
    const newPassword = CryptoJS.AES.encrypt(password, secretkey).toString();
    console.log(newPassword);
    const data = await user.create({
      id,
      name,
      email,
      password: newPassword,
      role,
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};
