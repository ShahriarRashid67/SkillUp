const express = require('express');
const router = express.Router();

const logIn = require('../../services/Authentications/logIn');
const signUp = require('../../services/Authentications/signUp');
const info = require('../../services/Authentications/info');
router.post('/login', logIn);
router.post('/signUp', signUp);
router.post('/info', info);
module.exports = router;
