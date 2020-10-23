require('dotenv').config();
const express = require('express');
const cors = require('cors');
const data = require('./data');
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyParser from 'body-parser';




const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true

} ).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());



app.user("/api/users", userRoute);
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
