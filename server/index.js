const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const products = require('./api/products');
app.use('/products', products);

app.get('/', (req, res) => res.send('home'));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server started on ' + port));