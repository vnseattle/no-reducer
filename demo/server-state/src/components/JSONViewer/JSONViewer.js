import React, {useState } from 'react';
import { connect } from "react-redux";
import {addNewItem} from "./../../actions/action"
import JSONPretty from 'react-json-pretty';

function JViewer(props) {
  
  return (
    <div className="container" style={{marginTop:'10px'}}> 

    <b>todos</b> :  <JSONPretty id="json-pretty" data={props.todos}></JSONPretty>

    
    </div>
  );
}

export default connect(state=>state)(JViewer);
