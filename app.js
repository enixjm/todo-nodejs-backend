require('dotenv').config();
const { USER, HOST, DATABASE, PASSWORD, PORT } = process.env;

const express = require("express");

const app = express();

const cors = require('cors');
app.use(cors("*"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const routs = require('./router/routs')
app.use('/api', routs)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});