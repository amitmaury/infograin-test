import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {RouterPage} from './router/index';

function App() {
  return (
    <React.Fragment>
      <Router>
        <RouterPage/>     
      </Router> 
    </React.Fragment>
  );
}

export default App;
