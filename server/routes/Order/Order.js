const express = require('express');
const router = express.Router();

const order = require('../../services/Order/Order');
router.post('/', order);
router.post('/sucess', async (req, res) => {
  res.redirect(`http://localhost:5173/dashboard/StudentClass`);
});

module.exports = router;
