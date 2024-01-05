import './App.css';
import ChoicesForm from './components/SelectionBarComponents/ChoicesBar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';

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
