import React from 'react';

const MediaPreview = ({ fileUrl }) => {
    const getMediaType = () => {
        if (fileUrl.match(/\.(jpeg|jpg|gif|png)$/)) return 'image';
        if (fileUrl.match(/\.(mp4|webm)$/)) return 'video';
        if (fileUrl.match(/\.(mp3|wav)$/)) return 'audio';
        if (fileUrl.match(/\.pdf$/)) return 'pdf';
        return 'unknown';
    };

    const type = getMediaType();

    if (type === 'image') return <img src={fileUrl} alt="Preview" width="300" />;
    if (type === 'video') return <video src={fileUrl} controls width="300" />;
    if (type === 'audio') return <audio src={fileUrl} controls />;
    if (type === 'pdf') return <a href={fileUrl} target="_blank" rel="noreferrer">View PDF</a>;

    return <p>Preview not available</p>;
};

export default MediaPreview;
