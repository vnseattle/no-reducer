import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { saveItemInList } from '../actions/actionTodoList';

const Edit = (props) => {
    const [task, setTask] = useState("");

    useEffect(() => {
        if (props.ds.selectedId) {
            setTask(props.ds.list.find(item => item.id === props.ds.selectedId).task);
        }
    }, [props.ds.selectedId])

    const saveItemInList = () => {
        props.saveItemInList(props.ds.selectedId, task)
    }

    return (
        <div style={coverStyle}>
            <div style={{ float: 'right' }}>Component "Edit"</div>
            ID:{props.ds.selectedId}
            <br />
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => saveItemInList()}>Save</button>
        </div>
    );
};


export default connect(state => state, { saveItemInList })(Edit);

/**
 * Styles
 */
const coverStyle = {
    border: '2px solid green', padding: '5px', margin: '15px'
}
