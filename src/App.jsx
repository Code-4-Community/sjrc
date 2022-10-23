import React from 'react';
import './App.css';
import OrgNavBar from './components/Navbar/index';
import Home from './components/Home';
import Org1 from './components/Org1';
import Org2 from './components/Org2';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/Org1' element={<Org1/>} />
            <Route path='/Org2' element={<Org2/>} />
          </Routes>
          <OrgNavBar />
      </Router>
    </React.Fragment>
  )
}

export default App;
