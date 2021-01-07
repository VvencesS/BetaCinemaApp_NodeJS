const phimRoute = require('./phim.route');
const taiKhoanRoute = require('./taikhoan.route');

function route(app) {
  app.use('/api/taikhoan', taiKhoanRoute);
  app.use('/api/phim', phimRoute);
  app.use('/api/', taiKhoanRoute);
}

module.exports = route;