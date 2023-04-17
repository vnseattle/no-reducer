import React from "react";
import { connect } from "react-redux";
import { getStudentsList, setCurrentClass } from "../../../actions/action";

const ClassListMolecule = (props) => {

    const { id, name, totalStudents } = props;

    const clickItem = () => id === 7 
    && props.getStudentsList(id) 
    && props.setCurrentClass(name)
  
   
   return (
    <div style={rootStyle(id === 7)} onClick={clickItem}>
      <div style={styles.item}>{id}.</div>
      <div style={styles.item}>{name}</div>
      <div style={styles.count}>{totalStudents}</div>
    </div>
   );
   
   
};

export default connect((state) => state,{
    getStudentsList
    ,setCurrentClass
})(ClassListMolecule);

const styles = {
    root: {
      width: '200px',
      height: '20px',
      border: '1px dotted gray',
      padding: '5px'
    },
    item: {
      float: 'left',
    },
    count: {
      float: 'right',
    },
    highlighted: {
      background: '#cde5ff',
      cursor: 'pointer'
    },
  };

const rootStyle = (isHighlighted) => {
   return { ...styles.root,
    ...(isHighlighted && styles.highlighted)
    }
};
  