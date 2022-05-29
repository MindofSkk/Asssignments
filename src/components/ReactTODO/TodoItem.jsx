import React from 'react'
import './Todo.css'

export const TodoItem = (pass) => {
  let a=pass.pass;
  return (
    <div>
      {a.map((b)=>(
      <div>


        <h2>{b}</h2>

      </div>
       ))}


    </div>
  )
}
