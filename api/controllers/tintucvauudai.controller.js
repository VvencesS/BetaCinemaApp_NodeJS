const TinTucVaUuDai = require('../../models/tintucvauudai.model');

module.exports.index = async (req, res) => {
    let tinTucVaUuDai = await TinTucVaUuDai.find();
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: tinTucVaUuDai,
    });
};

module.exports.getAllOffers = async (req, res) => {
    let tinTucVaUuDai = await TinTucVaUuDai.find();
    let offers = await tinTucVaUuDai.filter(
        item => item.loaitmvakm === "Khuyến mại mới"
    );
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: offers,
    });
};

module.exports.getAllNews = async (req, res) => {
    let tinTucVaUuDai = await TinTucVaUuDai.find();
    let news = await tinTucVaUuDai.filter(
        item => item.loaitmvakm === "Tin bên lề"
    );
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: news,
    });
};

module.exports.getOffersAndNewsById = async (req, res, next) => {
    const tin = await TinTucVaUuDai.findById(req.params.id);
    res.json({
        message: 'Lấy dữ liệu thành công!',
        success: 1,
        data: tin,
    });
}
