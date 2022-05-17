import React, { useState } from 'react'

export const Counter = () => {
    // let count=0;
    const[count,setCount]=useState(0)
    function inr()
    {
  setCount(count+1)
    }
    function der()
    {
        setCount(count-1)


    }
  return (
    <>
    
    <div>Counter: {count}
    
    </div>
    <div>
        <button onClick={inr}>incrment</button>
        <button onClick={der}>decrement</button>

        <button onClick={der}>double</button>

    </div>
    
    </>

  )
}
