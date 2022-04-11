import React , {useState} from 'react'

export default function Counter() {
  const [count , setcount] = useState(0)

  const increment = () => {
    if (count < 30) {
      setcount(count+1)
    }
  }
  const decrement =() => {
    if (count > 0) {
      setcount (count-1)
    }
  }
  return (
    <div>
      <button onClick={() => increment()}>+</button>
      {count}
      <button onClick={() => decrement()}>-</button>
    </div>
  )
}
