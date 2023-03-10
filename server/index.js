require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(router);

// serves the static files after url has been refreshed
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

// serves the static files after url has been refreshed
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
