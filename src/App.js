import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from 'react-dom'

import Card from './components/Card';
import CardFlip from './components/CardFlip';
import Logo from '../src/components/Logo';
import Leadership from './components/Leadership'
import Transparency from './components/Transparency';
import './App.css';

function App() {
  return (
//rendering logo component, circle
    <div className="App"> 
    <Logo /> 
    <Card />
    <Leadership />
    <CardFlip />
    <Transparency />
    </div>
  );
}

export default App;
