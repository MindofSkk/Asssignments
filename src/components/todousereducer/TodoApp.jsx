import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/todo.reducer";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <AddTodo
      add={text => dispatch({type: "ADD_TODO", text: text})}
    />
    {state.todos.map(post => (
      <Todo
        key={post.id}
        todo={post}
        remove={() => dispatch({type: "REMOVE_TODO", id: post.id})}
        edit={text => dispatch({type: "edit", id: post.id, text: text})}
      />
    ))}
  </>);
}

export default TodoApp;