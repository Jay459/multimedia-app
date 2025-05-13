import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/upload`;

const upload = async (formData) => {
    const res = await axios.post(API_URL, formData, {
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
};

export default {
    upload,
};
