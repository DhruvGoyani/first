import logo from './logo.svg';
import './App.css';
import State from './container/State';
import Medicine from './container/Medicine';
import Arrayfunction from './container/Arrayfunction';
import Objectfunction from './container/Objectfunction';
import Country from './container/Country';
import Employee from './container/Employee';


function App(props) {
  
    return (
      <div>
        <Medicine /> 
        <Employee />
        <State />
        <Country />
        <Arrayfunction />
        <Objectfunction />
      </div>
    )
  
}



export default App;
