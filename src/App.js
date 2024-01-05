// App.js
import React from 'react';
import { Routes, Route } from 'react-router';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
