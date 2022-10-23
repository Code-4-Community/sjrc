import React from 'react';
import './IconGrid.css';
import icon from '../imgs/placeholder.png';

const IconGrid = () => {
    return (
        <section id="Icon Grid" className="container">
        <div className="container">
            <h2>Icons</h2>
            iconList
        </div>
    </section>
    )
}

const iconList = [
    {
        title: "Placeholder 1",
        image: icon,
        link: "https://google.com"
    },
    {
        title: "Placeholder 2",
        image: icon,
        link: "https://google.com"
    },
    {
        title: "Placeholder 3",
        image: icon,
        link: "https://google.com"
    }
]




export default IconGrid;
