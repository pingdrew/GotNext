import React, { useState } from 'react';

const MediaUploader = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
            onUpload(selectedFile);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {file && <img src={file} alt="Preview" style={{ width: '100px' }} />}
        </div>
    );
};

export default MediaUploader;
