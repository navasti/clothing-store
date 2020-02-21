const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const products = require('./routes/products');
app.use('/products', products);

app.get('/', (req, res) => res.send('home'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started on ' + port));