import React from "react";
import Header from "./Header";


const MasterTemplate = (props) => {

  return (
    <main>
      <Header />
      {props.children}
    </main>
  );
};

export default MasterTemplate;