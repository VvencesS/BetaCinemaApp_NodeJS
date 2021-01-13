const shortid = require('shortid');
const jwt = require('jsonwebtoken')

const TaiKhoan = require('../../models/taikhoan.model');
const { jwtkey } = require('../../keys');

module.exports.index = async (req, res, next) => {
    let taiKhoan = await TaiKhoan.find();
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: taiKhoan,
    });
};

module.exports.signup = async (req, res, next) => {
    try {
        const taiKhoan = new TaiKhoan({
            sothethanhvien: shortid.generate(),
            hoten,
            email,
            matkhau,
            sodienthoai,
            ngaysinh,
            gioitinh,
            cmt,
            tinhthanhpho_id,
            quanhuyen_id,
            diachilienhe,
            anhdaidien,
        });
        await taiKhoan.save();
        // const token = jwt.sign({ taiKhoanId: taiKhoan._id }, jwtkey)

        res.json({
            message: 'Lấy dữ liệu thành công!',
            success: 1,
            data: taiKhoan,
        });
    } catch (err) {
        res.status(422).json({
            message: err.message,
            success: 0,
        })
    }
};

module.exports.signin = async (req, res, next) => {
    try {
        const { email, matkhau } = req.body;
        const taiKhoan = await TaiKhoan.findOne({ email: email });
        console.log(taiKhoan);
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

        res.json({
            message: 'Đăng nhập thành công!',
            success: 1,
            data: taiKhoan,
        });
    } catch (err) {
        res.status(422).json({
            message: err.message,
            success: 0,
        })
    }
};

module.exports.update = async (req, res, next) => {
    try {
        await TaiKhoan.updateOne({ _id: req.params.id }, req.body);
        res.json({
            message: 'Cập nhật thành công!',
            success: 1,
        });
    } catch (err) {
        res.json({
            message: err.message,
            success: 0,
        });
    }

}
