import React, { useState } from 'react'
import './Todo.css'
import { TodoItem } from './TodoItem';

export const Todo = () => {
    const [task,setTask]=useState("");
    const[array,setArray]=useState([]);
    const invalue =(e)=>{
        console.log("skk",e.target.value);
        setTask(e.target.value);
        
    }
    const store =()=>{
    //  setArray([...array,task])
  setArray([task,...array])

     console.log(array);
     
    
    }
  return (
    <div className='tdo'>

   <input placeholder="Write Something" onChange={invalue}  /> 

   <button onClick={store} >+</button>

  
  <TodoItem pass={array}/>

    </div>
  )
}
