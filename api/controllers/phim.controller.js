const Phim = require('../../models/phim.model');

module.exports.index = async (req, res) => {
    let phim = await Phim.find();
    res.json(phim);
};
