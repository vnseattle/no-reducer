import React from 'react';
import MasterTemplate from "../MasterTemplate/MasterTemplate";

import ClassList from "../../Organisms/ClassListOrganism/ClassListOrganism";
import ClassOrganism from '../../Organisms/ClassOrganism/ClassOrganism';

const MainViewTemplate = () => {
    return (
        <MasterTemplate>
             <div style={styles.container}>
                <ClassList />
              </div>
            <div style={{ ...styles.container, ...styles.secondContainer }}>
                <ClassOrganism />
            </div>
        </MasterTemplate>
    )
}

export default MainViewTemplate;

const styles = {
    container: {
      float: 'left',
      border: '1px solid black',
      padding: '15px',
    },
    secondContainer: {
      marginLeft: '10px',
    },
  };