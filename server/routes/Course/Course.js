const express = require('express');
const router = express.Router();
const getCourse = require('../../services/Course/getCourse');
const addCourse = require('../../services/Course/addCourse');
router.get('/', getCourse);
router.post('/', addCourse);
module.exports = router;
