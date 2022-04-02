import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToList } from '../actions/actionTodoList';

const Input = (props) => {
    const [item, setItem] = useState("");

    return (
        <>
            {item}
            <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={() => props.addToList(item)}>Add</button>
        </>
    );
};

export default connect(null, { addToList })(Input);
