import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from 'react-dom'

import Card from './components/Card';
import Logo from '../src/components/Logo';
import './App.css';

function App() {
  return (
//rendering logo component, circle
    <div className="App"> 
    <Logo /> 
    <Card />
    </div>
  );
}

export default App;
