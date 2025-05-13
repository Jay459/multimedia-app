import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to Media Vault</h1>
                <p>
                    Upload, preview, and search your multimedia content with ease. We support images,
                    videos, audio files, and PDFs.
                </p>

                {user ? (
                    <div className="home-actions">
                        <Link to="/upload" className="home-btn">Upload Media</Link>
                        <Link to="/search" className="home-btn secondary">Search Library</Link>
                    </div>
                ) : (
                    <div className="home-actions">
                        <Link to="/login" className="home-btn">Login</Link>
                        <Link to="/register" className="home-btn secondary">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
