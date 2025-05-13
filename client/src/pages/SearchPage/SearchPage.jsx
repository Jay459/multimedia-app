import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMedia } from '../../features/search/searchSlice';
import './SearchPage.css';

const SearchPage = () => {
    const dispatch = useDispatch();
    const { searchResults, loading, error } = useSelector((state) => state.filesList) || {};

    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            dispatch(searchMedia(query));  // Dispatch the search action with the query
        }
    };


    return (
        <div className="search-container">
            <h2>Search Media</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name, tags..."
                    className="search-input"
                />
                <button type="submit" disabled={loading}>Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="search-results">
                {searchResults?.length > 0 ? (
                    searchResults.map((file) => (
                        <div key={file._id} className="search-result-item">
                            <h3>{file.fileName}</h3>
                            <p>{file.description}</p>
                            <p><strong>Tags:</strong> {file.tags.join(', ')}</p>
                            <p><strong>Uploaded on:</strong> {new Date(file.uploadDate).toLocaleDateString()}</p>
                            <img src={file.url} alt={file.name} />
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
