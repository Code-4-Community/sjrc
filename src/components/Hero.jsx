import React from 'react';
import HeroImg from '../imgs/hero-img.jpg'; //https://unsplash.com/photos/oS0sZdE5U6c
import './Hero.css';

const Hero = () => {
    return (
        <React.Fragment>
            <div className="hero-container">
                <div className="hero-cta">
                    <h1>Stay connected.</h1>
                    <h1>Stay informed.</h1>
                    <p>Northeastern University’s Social Justice Resource Center raises awareness for local demonstrations and promotes discourse through active engagement amongst students.</p>
                    <div className="hero-btns">
                        <a href="https://google.com" className="login-tab-hero">Login</a>
                        <a href="https://google.com" className="news-tab-hero">Get Latest News</a>
                    </div>
                </div>
                <img src={HeroImg} className="hero-image" alt="landing page" />
            </div>
        </React.Fragment>
    )
}

export default Hero;
