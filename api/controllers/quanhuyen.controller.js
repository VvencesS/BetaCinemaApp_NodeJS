const QuanHuyen = require('../../models/quanhuyen.model');

module.exports.index = async (req, res) => {
    let quanHuyen = await QuanHuyen.find();
    res.json(quanHuyen);
};