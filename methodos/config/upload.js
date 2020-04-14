const multer = require('./node_modules/multer');
const path = require('path');

module.exports = {
    storage = multer.diskStorage({
        destination : path.resolve(__dirname, '..', 'uploads'),
        filename : (req, file, cb) => {
            let imgExt = path.extname(file.originalname);
            let imgName = path.basename(file.originalname, ext);
            cb(null, `${imgName}-${Date.now()}${imgExt}`)
        }
    });
}