require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.use('/', require('./routes/hello'));

app.get('/', (req, res, next) => {
  res.send('Ya reached app.js!')
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
