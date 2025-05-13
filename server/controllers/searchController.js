// server/controllers/searchController.js
import asyncHandler from 'express-async-handler';
import * as searchService from '../services/searchService.js';

/**
 * @desc    Search files by keyword (file name or tags)
 * @route   GET /api/search?query=keyword
 * @access  Private
 */
export const searchFiles = asyncHandler(async (req, res) => {
    try {
        const { query } = req.query;

        if (!query || query.trim() === '') {
            res.status(400);
            throw new Error('Search query is required');
        }

        const results = await searchService.searchFiles(query.trim());

        res.status(200).json({
            success: true,
            count: results.length,
            files: results,
        });
    } catch (error) {
        throw new Error(error)
    }
});
