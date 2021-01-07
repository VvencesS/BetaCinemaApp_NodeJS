const RapChieu = require('../../models/rapchieu.model');

module.exports.index = async (req, res) => {
    let rapChieu = await RapChieu.find();
    res.json(rapChieu);
};