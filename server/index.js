require('dotenv').config();
const express = require('express');
const path = require('path');
// const router = require('./router');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/test', (req, res) => {
  res.send('hello jobsite!');
});
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
