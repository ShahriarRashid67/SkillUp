const express = require('express');
const router = express.Router();

const getExpert = require('../../services/Expert/getExpertbyCourse');
const getCourse = require('../../services/Expert/getCoursebyExpert');
const addExpertByCourse = require('../../services/Expert/addExpert');
const getAllexpert = require('../../services/Expert/getAllexpert');
const addCoursePending = require('../../services/Expert/addCoursePending');
const approveCoursePending = require('../../services/Expert/approveCoursePending');
const allPending = require('../../services/Expert/allPending');
router.get('/course', getExpert);
router.get('/mentor/:id', getCourse);
router.post('/', addExpertByCourse);
router.post('/pending', addCoursePending);
router.get('/pending', allPending);
router.post('/approve', approveCoursePending);
router.get('/', getAllexpert);
// router.post('/')
// router.get('/expert', expert);
module.exports = router;
