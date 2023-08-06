const express = require('express');
const router = express.Router();

const createReviews = require('../../services/Reviews/CreateReview');
const getReviewByInstructor = require('../../services/Reviews/getReviewByInstructor');

router.post('/', createReviews);
router.get('/:id', getReviewByInstructor);
// router.post('/')
// router.get('/expert', expert);
module.exports = router;
