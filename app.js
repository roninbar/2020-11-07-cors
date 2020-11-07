const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const dataRouter = require('./routers/data');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data', cors({origin: 'http://localhost:4000'}), dataRouter);

module.exports = app;
