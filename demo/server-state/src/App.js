import React from "react";
import MainViewTemplate from "./components/common/MainViewTemplate/MainViewTemplate";
import TodoListView from "./components/TodoView/TodoView"
import TodoSubmit from "./components/TodoSubmit/TodoSubmit";
import JSONViewer from "./components/JSONViewer/JSONViewer";
const App = () => <MainViewTemplate>
     <div className="main-container">
      <div className="column">Component 1<TodoListView/> </div>
      <div className="column">Component 2 <TodoSubmit /></div>
      <div className="column">Reducer: <JSONViewer /></div>
    </div>

    </MainViewTemplate>

export default App;
