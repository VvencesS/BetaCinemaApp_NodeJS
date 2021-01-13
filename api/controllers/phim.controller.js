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

module.exports.getAllNowShowingMovie = async (req, res, next) => {
    let dateNow = new Date();
    try {
        const phim = await Phim.find();
        const nowShowingMovie = await phim.filter((item) => {
            let ngayKhoiChieuArr = item.ngaykhoichieu.split('/');
            let ngayKhoiChieu = Date.parse(
                parseInt(ngayKhoiChieuArr[2]) + '-' +
                parseInt(ngayKhoiChieuArr[1]) + '-' +
                parseInt(ngayKhoiChieuArr[0])
            );
            return ngayKhoiChieu < dateNow;
        });
        res.json({
            message: 'Lấy dữ liệu thành công!',
            success: 1,
            data: nowShowingMovie,
        });
    } catch (err) {
        res.json({
            message: err.message,
            success: 0,
        });
    }
};

module.exports.getAllComingSoonMovie = async (req, res, next) => {
    let dateNow = new Date();
    try {
        const phim = await Phim.find();
        const nowShowingMovie = await phim.filter((item) => {
            let ngayKhoiChieuArr = item.ngaykhoichieu.split('/');
            let ngayKhoiChieu = Date.parse(
                parseInt(ngayKhoiChieuArr[2]) + '-' +
                parseInt(ngayKhoiChieuArr[1]) + '-' +
                parseInt(ngayKhoiChieuArr[0])
            );
            return ngayKhoiChieu > dateNow;
        });
        res.json({
            message: 'Lấy dữ liệu thành công!',
            success: 1,
            data: nowShowingMovie,
        });
    } catch (err) {
        res.json({
            message: err.message,
            success: 0,
        });
    }
};

module.exports.getAllSneakShowMovie = async (req, res, next) => {
    let dateNow = new Date();
    try {
        const phim = await Phim.find();
        const nowShowingMovie = await phim.filter((item) => {
            if (item.ngaychieusom == "") return false;
            let ngayKhoiChieuArr = item.ngaykhoichieu.split('/');
            let ngayKhoiChieu = Date.parse(
                parseInt(ngayKhoiChieuArr[2]) + '-' +
                parseInt(ngayKhoiChieuArr[1]) + '-' +
                parseInt(ngayKhoiChieuArr[0])
            );
            return ngayKhoiChieu > dateNow;
        });
        res.json({
            message: 'Lấy dữ liệu thành công!',
            success: 1,
            data: nowShowingMovie,
        });
    } catch (err) {
        res.json({
            message: err.message,
            success: 0,
        });
    }
};
