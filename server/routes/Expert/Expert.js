const express = require('express');
const router = express.Router();

const getExpert = require('../../services/Expert/getExpertbyCourse');
const getCourse = require('../../services/Expert/getCoursebyExpert');
const addExpertByCourse = require('../../services/Expert/addExpert');
const getAllexpert = require('../../services/Expert/getAllexpert');
router.get('/course', getExpert);
router.get('/mentor/:id', getCourse);
router.post('/', addExpertByCourse);
router.get('/', getAllexpert);
// router.post('/')
// router.get('/expert', expert);
module.exports = router;
