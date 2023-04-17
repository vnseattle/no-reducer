import React from "react";

const StudentListItemMolecule = ({id,name,pictureUrl}) => {
   
   return (
    <div style={styles.root}>
      <div style={styles.item}>{id}.</div>
      <div style={styles.item}>{name}</div>
      <div style={styles.image}>
        <img style={styles.image} src={pictureUrl} />
      </div>
    </div>
   
   );

   
};

export default StudentListItemMolecule;

const styles = {
    root: {
      width: '200px',
      float: 'left',
      padding: '5px',
      border: '1px dotted gray'
    },
    item: {
      float: 'left',
    },
    image: {
      float: 'right',
      width: '100px',
    },
  };