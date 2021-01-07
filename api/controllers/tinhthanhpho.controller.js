const TinhThanhPho = require('../../models/tinhthanhpho.model');

module.exports.index = async (req, res) => {
    let tinhThanhPho= await TinhThanhPho.find();
    res.json(tinhThanhPho);
};