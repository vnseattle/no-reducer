import React from "react";
import Header from "./Header";
import './main.css'

const MasterTemplate = (props) => {

  return (
    <main>
      <Header />
      {props.children}
    </main>
  );
};

export default MasterTemplate;