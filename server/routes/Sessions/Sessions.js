const express = require('express');
const router = express.Router();
const createSessions = require('../../services/Sessions/createSessions');
const getSessions = require('../../services/Sessions/getAllsessions');
const getSessionsByStudent = require('../../services/Sessions/getSessionsByStudent');
const getSessionsByInstructor = require('../../services/Sessions/getSessionsByInstructor');
const getSessionsByID = require('../../services/Sessions/getSessionsbyID');

router.post('/', createSessions);
router.get('/', getSessions);
router.post('/student', getSessionsByStudent);
router.post('/instructor', getSessionsByInstructor);
router.post('/id', getSessionsByID);
// router.get('/expert', expert);
module.exports = router;
