require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const data = require('./data');
const config = require('./config');
const userRoute = require('./routes/userRoute');

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true

} ).catch(error => console.log(error.reason));

const app = express();
app.use(express.json());
app.use(cors());



app.use("/api/users", userRoute);
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x=> x._id === productId);
  if (product)
    res.send(product);
  else
    res.send({msg: "Product Not Found."}) /* res.status(404) not working*/
    
  


});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
