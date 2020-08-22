const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const responseTime = require('response-time')
require('./app/utils/redis');
const app = express();

app.use(responseTime());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mxm',{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex: true
})

// routes
app.use(require('./app/routes'));

app.listen(3001, () => console.log('server on!'));