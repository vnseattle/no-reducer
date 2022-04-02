import React from "react";
import { connect } from "react-redux";

const List = (props) => {
    return (
        <>
            {props.ds.list.map(item => <div>{item}</div>)}
        </>
    );
};

export default connect(state => state, {})(List);
