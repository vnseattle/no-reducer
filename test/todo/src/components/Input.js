import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToList } from '../actions/actionTodoList';

const Input = (props) => {
    const [item, setItem] = useState("");

    return (
        <div style={{ border: '2px solid green', padding: '5px', margin: '15px' }}>
            <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={() => props.addToList(item)}>Add</button>
            <div style={{ float: 'right' }}>Component "Input"</div>
        </div>
    );
};

export default connect(null, { addToList })(Input);
