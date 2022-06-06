import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const [todos,settodos]=useState([]);
    const [newtodo,setnewtodo]=useState("");
    const [count,setcount]=useState(0)
    let saveinfo=()=>{
        //call api to save this information to backend
        fetch('http://localhost:8080/todos',{
            // post means send data to server means db.json file
            method:"POST",
            headers:{
                "content-type":"application/json",

            },
            body:JSON.stringify({
            task:newtodo, "isComplated":false,

            })
           

        }) 
        // this code for show data in body without refracing
         .then((response) => response.json())
        .then((data) =>{settodos([...todos,data])
             setnewtodo("");
        })
    };
   
    useEffect(()=>{
        const getdata=()=>{
            fetch(`http://localhost:8080/todos?_page=${count}&_limit=7`)
            .then(response => response.json())
            .then(data => settodos(data));

        }
        getdata();
       

    },[count])
  return (
    <div>Todo
        <div>
            <div>
            <input type="text" onChange={(e)=>setnewtodo(e.target.value)} />
            <button onClick={saveinfo}>+</button>
            </div>
            {todos.map((el)=>(
                <div key={el.id}>{el.task}</div>

            ))}
        </div>
        <div>
           <button disabled ={count<=1} onClick={()=>setcount(count-1)}>pre</button>
           <button onClick={()=>setcount(count+1)}>next</button>
        </div>
        <div>{count}</div>
        
      
    </div>
  )
}

export default TodoList