import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from 'react-dom'

import Card from './components/Card';
import Logo from '../src/components/Logo';
import Leadership from './components/Leadership'
import './App.css';

function App() {
  return (
//rendering logo component, circle
    <div className="App"> 
    <Logo /> 
    <Card />
    <Leadership />
    </div>
  );
}

export default App;
