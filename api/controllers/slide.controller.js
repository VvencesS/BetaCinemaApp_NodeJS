const Slide = require('../../models/slide.model');

module.exports.index = async (req, res) => {
    let slide = await Slide.find();
    let slideImage = slide.map(item => item.anhslide);
    res.json({
        success: 1,
        slide: slideImage,
    });
};