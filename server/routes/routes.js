const express = require('express');
const router = express.Router();

const Auth = require('./Authentication/Auth');
const Instructor = require('./Instructor/Instructor');
const Course = require('./Course/Course');
const Expert = require('./Expert/Expert');
const Sessions = require('./Sessions/Sessions');
const Reviews = require('./Reviews/Reviews');
const Order = require('./Order/Order');

router.use('/auth', Auth);
router.use('/instructor', Instructor);
router.use('/course', Course);
router.use('/expert', Expert);
router.use('/sessions', Sessions);
router.use('/reviews', Reviews);
router.use('/order', Order);
module.exports = router;
// http://localhost:3001/expert/
