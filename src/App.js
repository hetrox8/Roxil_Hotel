// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Home from './Components/Home';

const App = () => {
  return (
    <> 
    <Nav />
    <Home />
    <Routes>    
    </Routes>
    </>
  );
};

export default App;
