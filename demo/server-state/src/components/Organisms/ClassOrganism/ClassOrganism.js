import React, { useState } from "react";
import { connect } from "react-redux";
import StudentListItemMolecule from "../../Molecules/StudentListItemMolecule/StudentListItemMolecule";

const ClassOrganism = (props) => {
   

   
   return (
   <>
    <h1>{`${props.ds?.currentClass?.name || ''}`} Students </h1>
        {props.ds?.students?.map(item =>  {
            return (<div>
                    <StudentListItemMolecule 
                        id={item.id}
                        name={item.name} 
                        pictureUrl={item.pictureUrl} /> <br/> 
                    </div>)
        })}
   </>
   );
   
 
   
};

export default connect((state) => state,{

})(ClassOrganism);
