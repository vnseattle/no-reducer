import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from './components/List';
import Input from './components/Input';
import { createList } from './actions/actionTodoList';

const App = (props) => {

  useEffect(() => {
    props.createList(["Hello"])
  })

  return (
    <div>
      <div>
        <List />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default connect(null, { createList })(App);
