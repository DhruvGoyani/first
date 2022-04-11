import React, {useState} from 'react'

export default function StateFun() {
    const [id , setId] = useState(101)
    const [name , setName] = useState('smit')

    const change = () => {
        setId(102)
    }
  return (
    <div>
        {id}
        <button onClick={() => change()}>CHANGE ID</button>
        {name}
        <button onClick={() => setName('dhruv')}>CHANGE NAME</button>
    </div>
  )
}
