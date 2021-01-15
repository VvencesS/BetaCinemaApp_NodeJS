const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { jwtkey } = require('../../keys');
const TaiKhoan = require('../../models/taikhoan.model');

module.exports.signin = async (req, res, next) => {
    const { email, matkhau } = req.body;
    console.log('signin input ', email, matkhau)
    if (!email || !matkhau) {
        return res.json({
            message: "Vui lòng nhập email và mật khẩu!",
            success: 0
        });
    }
    const taiKhoan = await TaiKhoan.findOne({ email });
    console.log('signin ', taiKhoan)
    if (!taiKhoan) {
        return res.json({
            message: "Tài khoản không tồn tại!",
            success: 0,
        });
    }

    try {
        bcrypt.compare(matkhau, taiKhoan.matkhau, (err, result) => {
            console.log('result', result);
            if (result) {

                const token = jwt.sign({ taiKhoanId: taiKhoan._id }, jwtkey);
                res.json({
                    success: 1,
                    token,
                    taiKhoan
                });
            } else {
                return res.json({
                    message: "Mật khẩu không đúng!",
                    success: 0,
                });
            }

        });

    } catch (err) {
        return res.json({ message: err.message, success: 0 });
    }
};

module.exports.signup = async (req, res) => {

    const { hoten, email, matkhau, nhaplaimk, sodienthoai, ngaysinh, gioitinh } = req.body;
    console.log(hoten, email, matkhau, nhaplaimk, sodienthoai, ngaysinh, gioitinh);
    if (!hoten || !email || !matkhau || !nhaplaimk || !sodienthoai || !ngaysinh || !gioitinh) {
        return res.json({
            message: 'Vui lòng nhập đầy đủ dữ liệu!',
            success: 0,
        });
    }
    if (matkhau !== nhaplaimk) {
        return res.json({
            message: 'Nhập lại mật khẩu không trùng!',
            success: 0,
        });
    }
    try {
        let cmt = '', tinhthanhpho_id = '', quanhuyen_id = '', diachilienhe = '', anhdaidien = 'anhdaidien/anh-dai-dien-mac-dinh.png', sothethanhvien = Math.random()*100000000000000000
        const taiKhoan = new TaiKhoan({ 
            sothethanhvien, hoten, email, matkhau, sodienthoai, ngaysinh, gioitinh, cmt, tinhthanhpho_id, quanhuyen_id, diachilienhe, anhdaidien
        });
        await bcrypt.genSalt(10, async (err, salt) => {
            if (err) {
                return res.status(422).send(err);
            }
            bcrypt.hash(taiKhoan.matkhau, salt, async (err, hash) => {
                if (err) {
                    return res.status(422).send(err);
                }
                taiKhoan.matkhau = hash;
                await taiKhoan.save();
                console.log('hash', hash, 'matkhau ', taiKhoan.matkhau);
            });
        });

        const token = jwt.sign({ taiKhoanId: taiKhoan._id }, jwtkey);
        res.json({ 
            taiKhoan,
            token,
            success: 1,
        });

    } catch (err) {
        return res.status(422).send(err.message);
    }


}
