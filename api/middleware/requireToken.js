const jwt = require('jsonwebtoken');

const TaiKhoan = require('../../models/taikhoan.model');
const { jwtkey } = require('../../keys');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: 'Chưa đăng nhập!' })
    }

    const token = authorization.replace("Bearer ", "");
    console.log('token: ', token);

    jwt.verify(token, jwtkey, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "Chưa đăng nhập!" })
        }
        const { taiKhoanId } = payload;
        const taiKhoan = await TaiKhoan.findById(taiKhoanId)
        req.taiKhoan = taiKhoan;
        next();
    })
};
