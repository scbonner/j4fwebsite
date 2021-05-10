import 'bootstrap/dist/css/bootstrap.min.css';
import Circle from './components/Circle';
import Logo from '../src/components/Logo';
import './App.css';

function App() {
  return (
//rendering logo component, circle
    <div className="App">
    <Logo /> 
    <Circle />
    </div>
  );
}

export default App;
