const mongoose = require('mongoose');

var slideSchema = new mongoose.Schema({
	anhslide: String,
});

var Slide = mongoose.model('Slide', slideSchema, 'slide');

module.exports = Slide;