import logo from './logo.svg';
import './App.css';
import State from './container/State';
import Medicine from './container/Medicine';
import Arrayfunction from './container/Arrayfunction';
import Objectfunction from './container/Objectfunction';


function App(props) {
  
    return (
      <div>
        <Medicine /> 
        <State />
        <Arrayfunction />
        <Objectfunction />
      </div>
    )
  
}



export default App;
