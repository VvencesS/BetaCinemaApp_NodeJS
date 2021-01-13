const Slide = require('../../models/slide.model');

module.exports.index = async (req, res) => {
    let slide = await Slide.find();
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: slide,
    });
};