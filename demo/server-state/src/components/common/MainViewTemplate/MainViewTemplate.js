import React from 'react';
import MasterTemplate from "../MasterTemplate/MasterTemplate";
import './todo.css'
const MainViewTemplate = (props) => {
    return (
        <MasterTemplate>
          {props.children}
        </MasterTemplate>
    )
}

export default MainViewTemplate;

