
const express = require('express');
const router = express.Router();

const { receiveMessage } = require('../controllers/messageController');

router.post('/', receiveMessage);

module.exports = router;
