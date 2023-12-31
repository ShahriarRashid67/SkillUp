const express = require('express');
const router = express.Router();
const profile = require('../../services/Instructor/profile');
const expert = require('../../services/Instructor/expert');
const allInstructor = require('../../services/Instructor/allInstructor');
const updateProfile = require('../../services/Instructor/updateProfile');
const getInfo = require('../../services/Instructor/getInfo');
const deleteUser = require('../../services/Instructor/getInfo');
router.post('/profile', profile);
router.get('/', allInstructor);
router.get('/expert', expert);
router.put('/:id', updateProfile);
router.get('/:id', getInfo);
router.delete('/:id', deleteUser);
module.exports = router;
