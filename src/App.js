import logo from './logo.svg';
import './App.css';
import State from './container/State';
import Medicine from './container/Medicine';
import Arrayfunction from './container/Arrayfunction';
import Objectfunction from './container/Objectfunction';
import Country from './container/Country';
import Employee from './container/Employee';
import StateFun from './container/StateFun';

function App(props) {
  
    return (
      <div>
        <Medicine /> 
        <Employee />
        <State />
        <Country />
        <Arrayfunction />
        <Objectfunction />
        <StateFun />
      </div>
    )
  
}



export default App;
