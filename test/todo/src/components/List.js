import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions/actionTodoList";

const List = (props) => {
    return (
        <div style={{ border: '2px solid black', padding: '5px', margin: '15px' }}>
            <div style={{ float: 'right' }}>Component "List"</div>
            <br />
            {props.ds.list.map(item => <>
                <button style={{ float: 'left', padding: '2px' }} onClick={() => props.deleteItem(item)}> x </button>
                <div style={{ border: '1px dotted gray', padding: '2px', boderRadius: '2px' }}> {item} </div>
            </>
            )}

        </div>
    );
};

export default connect(state => state, { deleteItem })(List);
