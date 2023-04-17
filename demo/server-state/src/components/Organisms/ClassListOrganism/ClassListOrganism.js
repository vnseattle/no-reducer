//#region Imports
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Item from "../../Molecules/ClassListItemMolecule/ClassListItemMolecule";
import { getClassList } from "../../../actions/action";

//#endregion

const ClassListOrganism = (props) => {
   
   //#region Use States
   
   //#endregion
   
   //#region Use Effects
   useEffect(()=>{
        props.getClassList()
   },[])
   
   //#endregion
   
   
   //#region User Interface code
   
   return (
    <div> 
        <h1>Class List</h1>
        {props.ds?.classes?.map(item =>  {
            return (<div>
                    <Item 
                        id={item.id}
                        name={item.name} 
                        totalStudents={item.total_students} 
                        /> <br/> 
                    </div>)
        })}
    </div>
   
   );
   
   //#endregion
   
};

export default connect((state) => state,{getClassList})(ClassListOrganism);

//#region Styles

//#endregion