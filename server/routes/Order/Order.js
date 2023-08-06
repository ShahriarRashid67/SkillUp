const express = require('express');
const router = express.Router();

const order = require('../../services/Order/Order');
router.post('/', order);

module.exports = router;
