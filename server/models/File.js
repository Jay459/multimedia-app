// server/models/File.js
import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    public_id: { type: String, required: true },
    url: { type: String, required: true },
    fileType: { type: String, required: true },
    fileName: { type: String, required: true },
    size: { type: Number, required: true },
    uploadDate: { type: Date, default: Date.now },
    tags: [{ type: String }],
    viewCount: { type: Number, default: 0 },
});

const File = mongoose.model('File', fileSchema);
export default File;
