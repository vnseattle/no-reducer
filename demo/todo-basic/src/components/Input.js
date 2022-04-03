import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToList } from '../actions/actionTodoList';

const Input = (props) => {
    const [task, setTask] = useState("");

    const addItemToList = () => {
        props.addToList({ id: (new Date()).getTime(), task })
    }

    return (
        <div style={coverStyle}>
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => addItemToList()}>Add</button>
            <div style={{ float: 'right' }}>Component "Input"</div>
        </div>
    );
};


export default connect(null, { addToList })(Input);

/**
 * Styles
 */
const coverStyle = {
    border: '2px solid green', padding: '5px', margin: '15px'
}
