const TinTucVaUuDai = require('../../models/tintucvauudai.model');

module.exports.index = async (req, res) => {
    let tinTucVaUuDai= await TinTucVaUuDai.find();
    res.json(tinTucVaUuDai);
};
