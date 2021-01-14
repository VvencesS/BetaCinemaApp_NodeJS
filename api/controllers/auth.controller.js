const jwt = require('jsonwebtoken');

const { jwtkey } = require('../../keys');
const TaiKhoan = require('../../models/taikhoan.model');

module.exports.login = async (req, res, next) => {
    try {
        const { email, matkhau } = req.body;
        const taiKhoan = await TaiKhoan.findOne({ email: email });

        if (!taiKhoan) {
            res.json({
                message: 'Tài khoản không tồn tại!',
                success: 0,
            });
            return;
        }

        if (taiKhoan.matkhau !== matkhau) {
            res.json({
                message: 'Mật khẩu không đúng!',
                success: 0,
            });
            return;
        }

        res.cookie('nguoiDungId', taiKhoan._id);
        res.json({
            message: 'Đăng nhập thành công!',
            success: 1,
            cookie: nguoiDungId,
            data: taiKhoan,
        });
    } catch (err) {
        res.status(422).json({
            message: err.message,
            success: 0,
        })
    }
};

module.exports.signup = async (req, res) => {

    const { email, matkhau } = req.body;

    try {
        const taiKhoan = new TaiKhoan({ email, matkhau });
        await taiKhoan.save();
        const token = jwt.sign({ taiKhoanId: taiKhoan._id }, jwtkey);
        res.send({ token });

    } catch (err) {
        return res.status(422).send(err.message);
    }


}
