import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import News from './components/News';
import IconGrid from './components/IconGrid';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <div className="icon-news-container">
        <p>
          <IconGrid />
        </p>
        <News />
      </div>
    </React.Fragment>
  )
}

export default App;
