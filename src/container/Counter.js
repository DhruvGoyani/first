import React from 'react'

export default function Counter(props) {
    const [count , setcount] = usestate(0)

    const incrementcounter = () => {
        setcount (() => count+1)
    }
    const decrementcounter = () => {
        setcount (() => count-1)
    }
    return (
    <div>
        <button onClick={() => incrementcounter()}>
            +
        </button>
        <button onClick={() => decrementcounter()}>
            -
        </button>
    </div>
  )
}
