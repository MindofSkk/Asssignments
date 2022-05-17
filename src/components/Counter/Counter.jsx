import React, { useState } from 'react'
import "./Counter.css"
export const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1 className={(count%2) ? "red" : "green"}> {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(count*2)}}>Double</button>
    </div>
  )
}