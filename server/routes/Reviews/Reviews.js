const express = require('express');
const router = express.Router();

const createReviews = require('../../services/Reviews/CreateReview');
const getReviewByInstructor = require('../../services/Reviews/getReviewByInstructor');
const getReviewByID = require('../../services/Reviews/getReviewBySession');

router.post('/', createReviews);
router.get('/:id', getReviewByInstructor);
router.get('/session/:id', getReviewByID);
// router.post('/')
// router.get('/expert', expert);
module.exports = router;
