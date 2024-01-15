const express = require('express');
const { finishOrder } = require('../controllers/orders.js');

const router = express();

router.route('/').post(finishOrder)

module.exports = router;
