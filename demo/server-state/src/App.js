import React from "react";
import MainViewTemplate from "./components/common/MainViewTemplate/MainViewTemplate";
import TodoListView from "./components/TodoView/TodoView"
import TodoSubmit from "./components/TodoSubmit/TodoSubmit";
import JSONViewer from "./components/JSONViewer/JSONViewer";
const App = () => <MainViewTemplate>
    <TodoListView/> 
    <TodoSubmit />
    <JSONViewer />
    </MainViewTemplate>

export default App;
