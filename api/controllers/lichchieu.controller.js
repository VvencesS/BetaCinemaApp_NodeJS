const LichChieu = require('../../models/LichChieu.model');

module.exports.index = async (req, res) => {
    let lichChieu = await LichChieu.find();
    res.json(lichChieu);
};