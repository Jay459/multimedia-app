// server/services/uploadService.js
import cloudinary from '../config/cloudinary.js';
import File from '../models/File.js';

export const uploadFile = async ({ file, userId, fileInfo }) => {
    const result = await cloudinary.uploader.upload(file.content, {
        resource_type: 'auto',
        folder: 'media_uploads',
        use_filename: true,
    });

    const newFile = await File.create({
        user: userId,
        public_id: result.public_id,
        url: result.secure_url,
        fileType: fileInfo.mimeType,
        fileName: fileInfo.originalName,
        size: fileInfo.size,
        uploadDate: new Date(),
        tags: [],
        viewCount: 0,
    });

    return newFile;
};
