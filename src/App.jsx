import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import News from './components/News';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <div className="icon-news-container">
        <p>
          Organization icons here
        </p>
        <News />
      </div>
    </React.Fragment>
  )
}

export default App;
