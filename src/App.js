import logo from './logo.svg';
import './App.css';

// function App(props) {
//   let data = [10,20,30,40,50]
//   return(
//     <div>
//       {
//       data.map((d , i) =>{
//         return(
//           <p>{d}</p>
//         )
//       })
//     }
//     </div>
//   )
// }

function App(props) {
  let data = 
  [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
    let filterdata = data.filter((d, i) => (d.expiry > 2021 && d.price > 200));
    let total = filterdata.reduce((acc , d) => acc+d.price , 0)
    // console.log(total)
    return (
      <div>
        <table border = '1'>
            <tr>
              <th><h1>Name</h1></th>
              <th><h1>Quantity</h1></th> 
              <th><h1>Price</h1></th>
              <th><h1>Expiry</h1></th>
              <th><h1>status</h1></th>
              <th><h1>total</h1></th>
            </tr>
        {
          filterdata.map ((d , i) =>{
            return (
              <tr>
                <td><h1> {d.name}</h1></td>
                <td><h1> {d.quantity}</h1></td>
                <td><h1> {d.price}</h1></td>
                <td><h1>{d.expiry}</h1></td>
                <td><h1>{d.status.toString()}</h1></td>
                {i == 0 ? <td rowSpan={filterdata.length}><h1>{total}</h1></td> : null}
              </tr>
            )
          })
        }
      </table>
      </div>
    )
  
}



export default App;
