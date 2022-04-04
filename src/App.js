import logo from './logo.svg';
import './App.css';
import State from './container/State';
import Medicine from './container/Medicine';



function App(props) {
  
    return (
      <div>
        <Medicine /> 
        <State />
      </div>
    )
  
}



export default App;
