import axios from 'axios';
import Cookies from 'js-cookie'

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;


// Register user
const register = async (userData) => {
    const res = await axios.post(`${API_URL}/register`, userData);
    if (res.data.user.token) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        Cookies.set('token', JSON.stringify(res.data.user.token))
    }
    return res.data;
};

// Login user
const login = async (userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    if (res.data.user.token) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        Cookies.set('token', JSON.stringify(res.data.user.token))
    }
    return res.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
