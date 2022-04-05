import React from 'react';

function employee(props) {
    let data =
    [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      },
    ];

    let filterdata = data.filter((d , i) => (d.age > 25 && d.salary > 20000));
    let total = filterdata.reduce((acc , d) => acc+d.salary + d.bonus , 0)
    console.log(total)

  return (
    <div>
        <table border='1'>
            <tr>
              <th><h1>name</h1></th>
              <th><h1>age</h1></th>
              <th><h1>salary</h1></th>
              <th><h1>bonus</h1></th>
              <th><h1>status</h1></th>
              <th><h1>total salary</h1></th>
              <th><h1>total</h1></th>
            </tr>
            {
              filterdata.map((d , i) => {
                return(
                  <tr>
                    <td><h1>{d.name}</h1></td>
                    <td><h1>{d.age}</h1></td>
                    <td><h1>{d.salary}</h1></td>
                    <td><h1>{d.bonus}</h1></td>
                    <td><h1>{d.status.toString()}</h1></td>
                    <td><h1>{d.salary+d.bonus}</h1></td>
                    {i===0 ? <td rowSpan={filterdata.length}><h1>{total}</h1></td> : null}
                  </tr>
                )
              })
            }
        </table>
    </div>
  );
}

export default employee;