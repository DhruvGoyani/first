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
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import Home from './container/Home/Home';

const Homewithloading = Loading(Home)

function App(props) {
  const [loading , setLoading] = useState(false);
  const [ data , setData] = useState([]);

  const userdata = [
    {
      id : 101 ,
      name : 'amit'
    },
    {
      id : 102 ,
      name : 'ajay'
    }
  ]

  useEffect(
    () => {
      setLoading(true);
      setTimeout(()=>{setLoading(false); setData(userdata)}, 2000)
    },
    []
  )  
  return (
      <div> 
         <Homewithloading
          isloading = {loading}
          data = {data}
         />

          {/* <Medicine /> 
          <Employee />
          <State />
          <Country />
          <Arrayfunction />
          <StateFun />
          <Objectfunction />
          <Counter />
          <Clock />
          <ClockFun /> */}
      </div>  
    )
  
}



export default App;
