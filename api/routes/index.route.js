const phimRoute = require('./phim.route');
const taiKhoanRoute = require('./taikhoan.route');
const slideRoute = require('./slide.route');
const tinTucVaUuDaiRoute = require('./tintucvauudai.route');
const authRoute = require('./auth.route');
const requireToken = require('../middleware/requireToken');

function route(app) {
  app.use('/api/taikhoan', taiKhoanRoute);
  app.use('/api/phim', phimRoute);
  app.use('/api/slide', slideRoute);
  app.use('/api/tintucvauudai', tinTucVaUuDaiRoute);
  app.use('/', authRoute);
}

module.exports = route;