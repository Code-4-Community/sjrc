import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import News from './News';

const Home = () => {
    return(
        <div>
        <NavBar />
        <Hero />
        <div className="icon-news-container">
          <p>
            Organization icons here
          </p>
          <News />
        </div>
        </div>
    );
}

export default Home;
