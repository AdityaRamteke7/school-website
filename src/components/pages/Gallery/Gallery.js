import React, { useState } from 'react';
import './Gallery.css';
import { images } from '../../assets/assets';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

    return (
        <div className="gallery-container">
            <h2>Gallery</h2>
            <div className="filter-buttons">
                <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
                <button className={filter === 'sports' ? 'active' : ''} onClick={() => setFilter('sports')}>Sports</button>
                <button className={filter === 'science' ? 'active' : ''} onClick={() => setFilter('science')}>Science</button>
                <button className={filter === 'cultural' ? 'active' : ''} onClick={() => setFilter('cultural')}>Cultural</button>
                <button className={filter === 'infrastructure' ? 'active' : ''} onClick={() => setFilter('infrastructure')}>Infrastructure</button>
            </div>
            <div className="gallery">
                {filteredImages.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
