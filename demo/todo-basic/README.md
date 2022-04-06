# TODO APP BASIC

Build a simple Todo List with no-reducer

# INSTALLATION 

```js
npm i 
```

```js
npm i no-reducer
```

# RUN
```js
npm start 
```

# INSTRUCTION

Hello Redux lover, 
I know that we love Redux and we do love the reducers, but for some cases, we don’t want to spend too much time on what we love. If the traditional way to manage the reducer is like all cooking steps to make your favorite dinner, “no-reducer” is like an Uber Eats which brings the food to your mouth in just a step. 

## How does it work?

![NO-REDUCER WORKFLOW](https://vnseattle.com/dynamicReducer/intro3.png)

I think this illustration shows very clearly how it works. The “no-reducer” with a tiny robot arm is an add-on in between Redux flow, which receives commands from Action and works on Reducers.

In this tutorial, I will code a Todo list using “no-reducer” with you. This project will not use all the great features of “no-reducer” but I believe it will be a big picture of it.

## Todo List

I did the following steps:

1.	Create React, set up Redux
2.	Create Components
3.	Adding no-reducer 


To save your time, I will not be going into details on steps 1 and 2 ( yeah, all Redux lovers know how to do it ).
This is the overview of the app is what you need for now.

![Todo list simple](https://vnseattle.com/dynamicReducer/demoTodo.png)

There are 3 components:
1.	List: show the list of tasks, click “❌” to remove, click task name to select.
2.	Input: getting input from the user, click the “Add” button to add a task.
3.	Edit: display the selected task, modify it and save it. 

And of course, there components will use global state (reducer) to communicate.

Now, the importance part 

# How to use no-reducer
1. Add no-reducer to combine Reducers. Yeah, that’s it! The no-reducer is created, and it is ready to listen to your commands. 
2.	Because I want to have a preload reducers structure, I added an initialstate that included the no-reducer we just created.

```js
import { reducer } from 'no-reducer';
import { combineReducers } from 'redux';
...
const initialState = {
  ds: {
    list: [],
    selectedId: null
  }
};
let rootReducer = combineReducers({ ds: reducer })
```

3.	Next, I will create an action file; here is where you called the no-reducer command to modify the reducer. 
I want to make it separate instead of adding them in the UI, which make the code cleaner.  
4.	In Input Action, only one function that sends the data to actionAdd. The “append” makes sense in this situation. In the instruction of no-reducer, the append is used to merge arrays, so I put the data to an array. Now, when you click the button, you can see the task is added.

### JSX
```js
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToList } from '../actions/actionTodoList';

const Input = (props) => {
    const [task, setTask] = useState("");

    const addItemToList = () => {
        props.addToList({ id: (new Date()).getTime(), task })
    }

    return (
        <div style={coverStyle}>
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => addItemToList()}>Add</button>
            <div style={{ float: 'right' }}>Component "Input"</div>
        </div>
    );
};


export default connect(null, { addToList })(Input);
```
### Action
```js
import { append } from 'no-reducer';
// APPEND
export const addToList = (item) => {
    return (dispatch) => {
        dispatch(append('list', [item]))
    }
};
```
5.	List Action: Here is where you display tasks.

```js
# TODO APP BASIC

Build a simple Todo List with no-reducer

# INSTALLATION 

```js
npm i 
```

```js
npm i no-reducer
```

# RUN
```js
npm start 
```

# INSTRUCTION

Hello Redux lover, 
I know that we love Redux and we do love the reducers, but for some cases, we don’t want to spend too much time on what we love. If the traditional way to manage the reducer is like all cooking steps to make your favorite dinner, “no-reducer” is like an Uber Eats which brings the food to your mouth in just a step. 

## How does it work?

![NO-REDUCER WORKFLOW](https://vnseattle.com/dynamicReducer/intro3.png)

I think this illustration shows very clearly how it works. The “no-reducer” with a tiny robot arm is an add-on in between Redux flow, which receives commands from Action and works on Reducers.

In this tutorial, I will code a Todo list using “no-reducer” with you. This project will not use all the great features of “no-reducer” but I believe it will be a big picture of it.

## Todo List

I did the following steps:

1.	Create React, set up Redux
2.	Create Components
3.	Adding no-reducer 


To save your time, I will not be going into details on steps 1 and 2 ( yeah, all Redux lovers know how to do it ).
This is the overview of the app is what you need for now.

![Todo list simple](https://vnseattle.com/dynamicReducer/demoTodo.png)

There are 3 components:
1.	List: show the list of tasks, click “❌” to remove, click task name to select.
2.	Input: getting input from the user, click the “Add” button to add a task.
3.	Edit: display the selected task, modify it and save it. 

And of course, there components will use global state (reducer) to communicate.

Now, the importance part 

# How to use no-reducer
1. Add no-reducer to ```combine Reducers```. Yeah, that’s it! The ```no-reducer``` is created, and it is ready to listen to your commands. 
2.	Because I want to have a preload reducers structure, I added an ```initialstate``` that included the no-reducer we just created.

```js
import { reducer } from 'no-reducer';
import { combineReducers } from 'redux';
...
const initialState = {
  ds: {
    list: [],
    selectedId: null
  }
};
let rootReducer = combineReducers({ ds: reducer })
```

3.	Next, I will create an ```action file```; here is where you called the no-reducer command to modify the reducer. 
I want to make it separate instead of adding them in the UI, which make the code cleaner.  
4.	In Input Action, only one function that sends the data to actionAdd. The ```append``` makes sense in this situation. In the instruction of no-reducer, the append is used to ```merge``` arrays, so I put the data to an array. Now, when you click the button, you can see the task is added.

### JSX
```js
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToList } from '../actions/actionTodoList';

const Input = (props) => {
    const [task, setTask] = useState("");

    const addItemToList = () => {
        props.addToList({ id: (new Date()).getTime(), task })
    }

    return (
        <div style={coverStyle}>
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => addItemToList()}>Add</button>
            <div style={{ float: 'right' }}>Component "Input"</div>
        </div>
    );
};
export default connect(null, { addToList })(Input);
```
### Action
```js
import { append } from 'no-reducer';
// APPEND
export const addToList = (item) => {
    return (dispatch) => {
        dispatch(append('list', [item]))
    }
};
```
5.	List Action: Here is where you display tasks.

### JSX
```js
import { deleteItem, selectItem } from "../actions/actionTodoList";

const List = (props) => {
    return (
        <div style={coverStyle}>
            <div style={{ float: 'right' }}>Component "List"</div>
            <br />
            {props.ds.list.map((item) => <div key={item.id} style={itemCoverStyle}>
                <button style={removeStyle} onClick={() => props.deleteItem(item.id)} tooltip={item.id}> <button>
                <div style={itemStyle} onClick={() => props.selectItem(item.id)}> {item.task} </div>
            </div>)}
        </div>
    );
};
export default connect(state => state, { deleteItem, selectItem })(List);
```
6.	Remove Action: Using ```remove``` with condition is a good choice in this case, let create command remove.
```js
import { remove } from 'no-reducer';

// REMOVE
export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch(remove('list', id, 'id'));
        dispatch(replace('selectedId', null));
    }
}
```
7.	Select Action: The select action will demonstrate the ```create``` function, but you can also use an update or replace function. This function will store the id of the recently selected task.
```js
import { create } from 'no-reducer';
// CREATE
export const selectItem = (id) => {
    return (dispatch) => {
        dispatch(create('selectedId', id))
    }
}
```

8.	Edit Action: This is how we use the ```update``` function. You can also use ```replace``` if you want.
```js
import { update } from 'no-reducer';
// UPDATE
export const saveItemInList = (id, task) => {
    return (dispatch) => {
        dispatch(update('list', { task: task }, id, 'id'))
    }
}
```

Happy Coding