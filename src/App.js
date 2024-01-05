import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ChoicesForm from './components/SelectionBarComponents/ChoicesBar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <> 
    <div className="App">
    <Nav />
    <Home />
    <Routes>    
    </Routes>
      <div className='App-background'>
        <ChoicesForm />
      </div>
    </div>
    </>
  );
}

export default App;
