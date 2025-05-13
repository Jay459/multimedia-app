// server/services/searchService.js
import File from '../models/File.js';

export const searchFiles = async (query) => {
    const regex = new RegExp(query, 'i'); // case-insensitive partial match


    // Search by filename or tags
    const files = await File.find({
        $or: [
            { fileName: regex },
            { tags: { $in: [regex] } },
        ],
    });

    // Apply basic ranking: score = viewCount * 2 + recencyScore
    const ranked = files.map(file => {
        const daysSinceUpload = Math.floor((Date.now() - new Date(file.uploadDate)) / (1000 * 60 * 60 * 24));
        const recencyScore = Math.max(0, 100 - daysSinceUpload); // newer = higher score

        const score = file.viewCount * 2 + recencyScore;

        return { ...file._doc, relevanceScore: score };
    });

    // Sort by relevance score descending
    ranked.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return ranked;
};
