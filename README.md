# No-reducer
### Handling Redux's state without creating reducers
#### www.no-reducer.com

This tool is for developers who use ```Redux``` to manage states but want to avoid creating ```reducers``` multiple times. 
With this tool, you can create states without having to create ```reducers```. You can also perform various actions on the state tree, like inserting, replacing, updating, or removing .etc.

![create oject user](https://vnseattle.com/dynamicReducer/no-reducer.png)

This library is an add-on, which means you can use it alongside your existing way of working with Redux. It won't affect anything in your current workflow.
## Demo 

[LIVE DEMO  - Todo List ](https://codesandbox.io/s/no-reducer-5sydfd?file=/actions.js )
[Todo List - Src code and instruction ](https://github.com/vnseattle/no-reducer/tree/main/demo/todo-basic )
[All features  - Src code and instruction ](https://github.com/vnseattle/no-reducer/tree/main/demo/main )

## Installation

```npm
npm i no-reducer
```
To use no-reducer, you need a simple installation by importing ```no-reducer``` on the page of ```combineReducers```.
You can name any name you want for the store object. 

For example, I named it ```ds``` in the ```combineReducers``` of Redux.
```js
import { combineReducers } from "redux";
import { reducer } from "no-reducer";

export default combineReducers({
    ds: reducer
});
```
## Actions
Import ```actions``` from the library.

```js
import { create, insert, remove, replace, update, append, clear } from "no-reducer"
```
Here are functions to manage the reducers
| Action | How to use ( with dispatch ) |
| ------   | ------ |
| create    | *dispatch*( **create**('YOUR-OBJECT-NAME', { YOUR: OBJECT }) )|
| insert    | *dispatch*( **insert**(```DESTINATION```, 'OBJECT-NAME', {YOUR:OBJECT} ) )| 
| remove    | *dispatch*( **remove**('DESTINATION') )| 
| replace   | *dispatch*( **replace**('DESTINATION',{YOUR:OBJECT}) )| 
| update    | *dispatch*( **update**('DESTINATION', {YOUR:OBJECT}) )| 
| append    | *dispatch*( **append**('DESTINATION',[my-new-array-items]) )| 
| clear     | *dispatch*( **clear**('DESTINATION') )| 

Please refer to the document on www.no-reducer.com for further information.

Example
```JS
import { create } from "no-reducer";
...
const response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
await dispatch(create('User', response.data));
```
![create oject user](https://vnseattle.com/dynamicReducer/CreatedObjectUser2.png)

## Documents
Manual: https://docs.no-reducer.com 
Tutorial: https://medium.com/@thankyouforyouremail3000/using-reducer-with-no-reducer-29bc29c7622b

## Happy Coding
Dev9x @2023