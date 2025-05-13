// server/controllers/uploadController.js
import asyncHandler from 'express-async-handler';
import * as uploadService from '../services/uploadService.js';
import { formatBuffer } from '../middleware/uploadMiddleware.js';

/**
 * @desc    Upload multimedia file
 * @route   POST /api/upload
 * @access  Private
 */
export const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400);
        throw new Error('No file uploaded');
    }

    const fileContent = formatBuffer(req.file);
    const uploadedData = await uploadService.uploadFile({
        file: fileContent,
        userId: req.user._id,
        fileInfo: {
            originalName: req.file.originalname,
            mimeType: req.file.mimetype,
            size: req.file.size,
        },
    });

    res.status(201).json({
        success: true,
        message: 'File uploaded successfully',
        file: uploadedData,
    });
});
