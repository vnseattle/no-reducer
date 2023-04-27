import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux";

import { getAllTodos, setCompletedItem, deleteItem  } from "./../../actions/action"

function TodoList(props) {

  useEffect(()=>{
    // Get list 
    props.getAllTodos()
  },[])


  const handleToggleComplete = (todo) => {
    props.setCompletedItem(todo)
    
  };

  const handleDeleteTodo = (todo) => {
    props.deleteItem(todo)
  };

  

  return (
    <div className="container">
      <h1 className="heading">Todo List</h1>
      <TransitionGroup component="ul" className="todo-list">
        {props.ds?.todos?.map((todo) => (
          <CSSTransition key={todo.id} timeout={300} classNames="item">
            <li className="todo-item">
            
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo)}
                className="checkbox"
              />
              <span style={{marginRight:'5px'}}>
                {todo.id}
              </span>

              <span className={todo.completed ? 'completed' : null}>
                {todo.title}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
  

    </div>
  );
}

export default connect(state=>state,{getAllTodos, setCompletedItem, deleteItem})(TodoList);
