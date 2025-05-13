// server/controllers/authController.js
import asyncHandler from 'express-async-handler';
import * as authService from '../services/authService.js';

/**
 * Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await authService.registerUser({ name, email, password });

    res.cookie('token', user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(201).json({
        success: true,
        message: 'Registration successful',
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: user.token
        },
    });
});

/**
 * Login an existing user
 * @route POST /api/auth/login
 * @access Public
 */
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.loginUser({ email, password });

    res.cookie('token', user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
        success: true,
        message: 'Login successful',
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: user.token
        },
    });
});

/**
 * Logout user
 * @route POST /api/auth/logout
 * @access Private
 */
export const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ success: true, message: 'Logged out successfully' });
});

/**
 * Get logged-in user profile
 * @route GET /api/auth/profile
 * @access Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await authService.getUserProfile(req.user._id);

    res.status(200).json({
        success: true,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        },
    });
});
