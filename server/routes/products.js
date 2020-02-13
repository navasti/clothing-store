const config = require('../config');
const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

router.get('/', async (req, res) => {
    const products = await getProducts();
    res.send(await products.find({}).toArray());
})

async function getProducts(){
    const client = await mongodb.MongoClient.connect(config.db, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    return client.db('store').collection('products');
}

module.exports = router;