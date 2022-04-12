import logo from './logo.svg';
import './App.css';
import State from './container/State';
import Medicine from './container/Medicine';
import Arrayfunction from './container/Arrayfunction';
import Objectfunction from './container/Objectfunction';
import Country from './container/Country';
import Employee from './container/Employee';
import Counter from './container/Counter';
import StateFun from './container/StateFun';
import Clock from './container/Clock';
import ClockFun from './container/ClockFun';

function App(props) {
  
    return (
      <div>
        <Medicine /> 
        <Employee />
        <State />
        <Country />
        <Arrayfunction />
        <StateFun />
        <Objectfunction />
        <Counter />
        <Clock />
        <ClockFun />
      </div>  
    )
  
}



export default App;
