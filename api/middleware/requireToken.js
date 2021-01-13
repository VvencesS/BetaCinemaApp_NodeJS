const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const TaiKhoan = require('../../models/taikhoan.model');
const { jwtkey } = require('../../keys');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "you must be logged in" })
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, jwtkey, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "you must be logged in 2" })
        }
        const { taiKhoanId } = payload;
        const taiKhoan = await TaiKhoan.findById(taiKhoanId)
        req.taiKhoan = taiKhoan;
        next();
    })
};
