import logo from './logo.svg';
import './App.css';
import State from './container/State';
import Medicine from './container/Medicine';
import Country from './container/country';


function App(props) {
  
    return (
      <div>
        <Medicine /> 
        <State />
        <Country />
      </div>
    )
  
}



export default App;
