const Phim = require('../../models/phim.model');

module.exports.index = async (req, res) => {
    let phim = await Phim.find();
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: phim,
    });
};

module.exports.getMovieById = async (req, res, next) => {
    const phim = await Phim.findById(req.params.id);
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: phim,
    });
};
