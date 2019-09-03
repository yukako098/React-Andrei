import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="bg-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
