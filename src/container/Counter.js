import React, { useState }  from 'react'

export default function Counter() {
    const [count , setcount] = useState(0)

    const incrementcounter = () => {
        setcount (() => count+1)
    }
    const decrementcounter = () => {
        setcount (() => count-1)
    }
  return (
    <div>
        <button onClick={() => incrementcounter()}>+</button>
        <span>{count}</span>
        <button onClick={() => decrementcounter()}>-</button>
    </div>
  )
}
