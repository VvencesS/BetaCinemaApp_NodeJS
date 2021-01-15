const shortid = require('shortid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

module.exports.update = async (req, res) => {

    const { id, cmt, tinhthanhpho_id, quanhuyen_id, diachilienhe, sothethanhvien, hoten, email, matkhau, sodienthoai, ngaysinh, gioitinh, } = req.body;
    console.log(id, cmt, tinhthanhpho_id, quanhuyen_id, diachilienhe);
    if (!cmt || !tinhthanhpho_id || !quanhuyen_id || !diachilienhe) {
        return res.json({
            message: 'Vui lòng nhập đầy đủ dữ liệu!',
            success: 0,
        });
    }

    try {
        const taiKhoan = new TaiKhoan({
            sothethanhvien, hoten, email, matkhau, sodienthoai, ngaysinh, gioitinh, cmt, tinhthanhpho_id, quanhuyen_id, diachilienhe, anhdaidien
        });
        await TaiKhoan.updateOne({ _id: id }, req.body);

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

module.exports.updatePassword = async (req, res, next) => {
    try {
        let { id, matkhau, matkhaumoi, nhaplai } = req.body;
        let taiKhoan = new TaiKhoan().findOne({ _id: id });
        bcrypt.compare(matkhau, taiKhoan.matkhau, async (err, result) => {
            console.log('result', result);
            if (result) {
                const token = jwt.sign({ taiKhoanId: taiKhoan._id }, jwtkey);
                if (matkhaumoi != nhaplai) {
                    return res.json({
                        message: "Mật khẩu không trùng!",
                        success: 0,
                    });
                }
                await bcrypt.genSalt(10, async (err, salt) => {
                    if (err) {
                        return res.status(422).send(err);
                    }
                    bcrypt.hash(matkhaumoi, salt, async (err, hash) => {
                        if (err) {
                            return res.status(422).send(err);
                        }
                        taiKhoan.matkhau = hash;
                         taiKhoan.updateOne({ _id: req.body.id }, {matkhau: hash});
                        // console.log('hash', hash, 'matkhau ', taiKhoan.matkhau);
                    });
                });

                res.json({
                    taiKhoan,
                    token,
                    success: 1,
                });
            } else {
                return res.json({
                    message: "Mật khẩu không đúng!",
                    success: 0,
                });
            }

        });

    } catch (err) {
        res.json({
            message: err.message,
            success: 0,
        });
    }

}
