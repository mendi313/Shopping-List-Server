const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ordersRoutes = require('./routes/orders.js');
const CategoriesRoute = require('./routes/categories.js');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/categories', CategoriesRoute);
app.use('/orders', ordersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
