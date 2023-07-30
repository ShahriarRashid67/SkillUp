const express = require('express');
const router = express.Router();
const profile = require('../../services/Instructor/profile');
const expert = require('../../services/Instructor/expert');
router.post('/profile', profile);
router.get('/expert', expert);
module.exports = router;
