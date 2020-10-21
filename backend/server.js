const express = require('express');
const cors = require('cors');
const data = require('./data');


const app = express();
app.use(express.json());
app.use(cors);


app.get('/api/products', (req, res) => {

    res.send(data.products);
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})