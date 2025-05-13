// server/middleware/uploadMiddleware.js
import multer from 'multer';
import DatauriParser from 'datauri/parser.js';
import path from 'path';

const storage = multer.memoryStorage();
export const upload = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image', 'video', 'audio', 'application/pdf'];
        const fileType = file.mimetype.split('/')[0];

        if (allowedTypes.includes(fileType)) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported file type'), false);
        }
    },
});

const parser = new DatauriParser();

export const formatBuffer = (file) => {
    return parser.format(path.extname(file.originalname).toString(), file.buffer);
};
