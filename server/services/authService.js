// server/services/authService.js
import User from '../models/User.js';
import { generateToken } from '../utils/jwt.js';
import bcrypt from 'bcryptjs';

/**
 * Registers a new user and returns user + JWT
 */
export const registerUser = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    const token = generateToken(user._id);


    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
    };
};

/**
 * Logs in user and returns user + JWT
 */
export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = generateToken(user._id);

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
    };
};

/**
 * Returns a user by ID (for profile view)
 */
export const getUserProfile = async (userId) => {
    const user = await User.findById(userId).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};
