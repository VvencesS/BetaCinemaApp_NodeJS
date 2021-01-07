const TaiKhoan = require('../../models/taikhoan.model');

module.exports.index = async (req, res) => {
    let taiKhoan= await TaiKhoan.find();
    res.json(taiKhoan);
};