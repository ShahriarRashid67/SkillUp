const express = require('express');
const router = express.Router();

const logIn = require('../../services/Authentications/logIn');
const signUp = require('../../services/Authentications/signUp');
const info = require('../../services/Authentications/info');
const allUser = require('../../services/Authentications/allUser');
const allPendingUser = require('../../services/Authentications/pending');

router.post('/login', logIn);
router.post('/signUp', signUp);
router.post('/info', info);
router.get('/all', allUser);
router.get('/pending', allPendingUser);
module.exports = router;
