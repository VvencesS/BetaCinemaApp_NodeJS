const mongoose = require('mongoose');

var phimSchema = new mongoose.Schema({
	tenphim: String,
	gioihantuoi: String,
	daodien: String,
	dienvien: String,
    theloai: String,
    thoiluong: String,
    ngonngu: String,
    ngaykhoichieu: String,
    ngaychieusom: String,
    mota: String,
    linktrailer: String,
    anhphim: String,
});

var Phim = mongoose.model('Phim', phimSchema, 'phim');

module.exports = Phim;
