const express = require('express');
const router = express.Router();
const products = require('./products.json');

router.get('/', async (req, res) => res.send(products))

module.exports = router;