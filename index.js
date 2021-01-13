require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const app = express();
const port = 3000;

// Route
const route = require('./api/routes/index.route');

// Middleware
const requireToken = require('./api/middleware/requireToken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET));

// init routes call api
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});