import React, { useEffect, useState } from 'react'

export default function ClockFun() {
    const [time , settime] = useState(new Date()); // constructor


    const tick = () => {
        console.log("tick")
        settime(new Date())
      }

    useEffect (
        () => {
            // componentDidMount , componentDidUpdate []
            const timerID = setInterval(() => tick() , 1000)
            return () => {
                clearInterval(timerID)
            }
        }
    )
  return (
    <div>  
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

