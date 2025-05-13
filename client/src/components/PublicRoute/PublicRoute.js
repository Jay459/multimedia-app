// components/PublicRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth); // adjust path based on your slice

    if (user) {
        // Already logged in
        return <Navigate to="/" replace state={{ message: "Already logged in" }} />;
    }

    return children;
};

export default PublicRoute;
