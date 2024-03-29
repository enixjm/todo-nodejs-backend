require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

const app = express();

const { PORT, MONGO_URI } = process.env;

const cors = require('cors');
app.use(cors("*"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose
  .connect(MONGO_URI, {dbName: 'todos'})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

const routs = require('./router/routs')
app.use('/api', routs)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});