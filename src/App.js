import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loader animation
    setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust the delay as needed
  }, []);

  return (
    <Router>
      {loading ? (
        <div className={`loader ${loading ? '' : 'hidden'}`}>
          {/* Customized loader animation */}
          
          <span className="loader__letter">H</span>
          <span className="loader__letter">y</span>
          <span className="loader__letter">T</span>
          <span className="loader__letter">h</span>
          <span className="loader__letter">e</span>
          <span className="loader__letter">r</span>
          <span className="loader__letter">e</span>
        </div>
      ) : (
        <div className="app">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
