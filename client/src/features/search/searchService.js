import axios from 'axios';

// Base URL for the search endpoint
const API_URL = `${process.env.REACT_APP_API_URL}/api/search/`;

const search = async (query) => {
    const res = await axios.get(API_URL, {
        params: { query },
        withCredentials: true,
    });

    return res.data;
};

export default {
    search,
};
