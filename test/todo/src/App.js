import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from './components/List';
import Input from './components/Input';

import { createList } from './actions/actionTodoList';

const App = (props) => {

  useEffect(() => {
    props.createList(["Hello world"])
  })

  return (
    <div>
      <List />
      <Input />
    </div>
  );
}

export default connect(null, { createList })(App);
