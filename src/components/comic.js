import React from 'react';
import './comic.css';

export default ({comic}) => (
    <div className="comic">
        <div className="comic__scroller">
            <img className="comic__img" src={`comics/${comic.img}`} alt={comic.alt} />
        </div>
        <p className="comic__title">{comic.title}</p>
    </div>
);