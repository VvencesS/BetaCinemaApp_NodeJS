const TaiKhoan = require('../../models/taikhoan.model');

module.exports.requireAuth = (req, res, next) => {
    const taiKhoan = TaiKhoan.findOne({ id: req.cookies.nguoiDungId });

    next();
}; 
