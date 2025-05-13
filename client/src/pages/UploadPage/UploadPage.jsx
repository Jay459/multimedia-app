import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadMedia } from '../../features/upload/uploadSlice';
import MediaPreview from '../../components/MediaPreview';
import './UploadPage.css';

const UploadPage = () => {
    const dispatch = useDispatch();
    const { loading, success, error, fileUrl } = useSelector((state) => state.files) || {};

    const [media, setMedia] = useState(null);
    const [tags, setTags] = useState('');

    const handleFileChange = (e) => {
        setMedia(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!media) return;

        const formData = new FormData();
        formData.append('file', media);
        formData.append('tags', tags);

        dispatch(uploadMedia(formData));
    };

    return (
        <div className="upload-container">
            <h2>Upload Media</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <input type="file" accept="image/*,video/*,audio/*,.pdf" onChange={handleFileChange} required />
                <input
                    type="text"
                    placeholder="Enter tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>

            {success && <p className="success">Upload successful!</p>}
            {error && <p className="error">{error}</p>}
            {fileUrl && <MediaPreview fileUrl={fileUrl} />}
        </div>
    );
};

export default UploadPage;
