const express = require('express');
const router = express.Router();
const sma = require('../controller/smacontroller'); 

router.get('/', sma.index);

router.get('/add', sma.uploadPage);

router.post('/upload', sma.uploadFile);

module.exports = router;