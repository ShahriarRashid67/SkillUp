const express = require('express');
const router = express.Router();

const getExpert = require('../../services/Expert/getExpertbyCourse');
const addExpert = require('../../services/Expert/addExpert');
router.get('/', getExpert);
router.post('/', addExpert);
// router.get('/expert', expert);
module.exports = router;
