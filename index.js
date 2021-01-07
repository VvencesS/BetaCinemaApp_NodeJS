require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

// Routes


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET));

// Models
const TaiKhoan = require('./models/taikhoan.model');

app.get('/', async (req, res) => {
    let taiKhoan = await TaiKhoan.find();
    res.json(taiKhoan);
});

// Call api


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});