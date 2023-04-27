import React, {useState } from 'react';
import { connect } from "react-redux";
import {addNewItem} from "./../../actions/action"

function TodoSubmit(props) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    props.addNewItem(newTodo)
    setNewTodo("")
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleAddTodo();
      }
  };

  return (
    <div className="container" style={{marginTop:'10px'}}> 
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter a new todo"
          className="input"
        />
        <button onClick={()=> props.addNewItem(newTodo)} className="button">
          Add
        </button>
      </div>

    </div>
  );
}

export default connect(null,{addNewItem})(TodoSubmit);
