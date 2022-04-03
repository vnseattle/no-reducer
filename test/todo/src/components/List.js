import React from "react";
import { connect } from "react-redux";
import { deleteItem, selectItem } from "../actions/actionTodoList";

const List = (props) => {
    return (
        <div style={coverStyle}>
            <div style={{ float: 'right' }}>Component "List"</div>
            <br />
            {props.ds.list.map((item) => <div key={item.id} style={itemCoverStyle}>
                <button style={removeStyle} onClick={() => props.deleteItem(item.id)} tooltip={item.id}> ❌ </button>
                <div style={itemStyle} onClick={() => props.selectItem(item.id)}> {item.task} </div>
            </div>
            )}

        </div>
    );
};

export default connect(state => state, { deleteItem, selectItem })(List);

/**
 * Styles
 */
const coverStyle = {
    border: '2px solid black', padding: '5px', margin: '15px'
}
const itemCoverStyle = {
    display: 'flex', cursor: 'pointer'
}
const itemStyle = {
    border: '1px dotted gray', padding: '2px', borderRadius: '5px'
}
const removeStyle = {
    float: 'left', padding: '2px', marginRight: '5px'
}
