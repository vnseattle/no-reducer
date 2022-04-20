# No-reducer
No-Reducer is a utility that helps developers manage the reducers without touching any reducer. 😲
Although this library was developed to work with Redux, this is an add-on library; developers can also use it with any reducer in any pattern.

![create oject user](https://vnseattle.com/dynamicReducer/intro3.png)

## Demo 

[LIVE DEMO  - Todo List ](https://codesandbox.io/s/no-reducer-5sydfd?file=/actions.js )

[Todo List - Src code and instruction ](https://github.com/vnseattle/no-reducer/tree/main/demo/todo-basic )

[All features  - Src code and instruction ](https://github.com/vnseattle/no-reducer/tree/main/demo/main )


# Example

### With No-Reducer 😁 
```js
import {create} from 'no-reducer'

// ACTION
export const action = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      await dispatch(create('users', response.data));
    } catch (err) {
      dispatch(setStatusCreator(err));
    }
  };
};

// No Reducer will work on reducers and action creators for you  😲
```

#### WITHOUT No-Reducer 😭 
```js
// ACTION
export const action = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(actionCreator(response.data)); 
    } catch (err) {
      dispatch(setStatusCreator(err));
    }
  };
};

// ACTION CREATOR 
export const actionCreator = (payload) => ({
  type: 'ALL_USERS', // type
  payload, // payload
});

// REDUCER 
const initialState = {
  users : [] // all users
};

const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_USERS':
      return {...state, users: action.payload}
    default:
      return state;
  }
}

export default siteReducer
```

### Set it up
```npm
npm i no-reducer
```
To use NoReducer, you need a simple installation by importing ```no-reducer``` on the page of ```combineReducers```.
You can name any name you want for the store object. 

For example, I named it ```ds``` in the ```combineReducers``` of Redux.
```js
import { combineReducers } from "redux";
import { reducer } from "no-reducer";

export default combineReducers({
    ds: reducer
});
```

![create array users](https://vnseattle.com/dynamicReducer/setup2.png)

## How to use 

Import functions from the library.

```js
import { create, insert, remove, replace, update, append, clear } from "no-reducer"
```
Here are functions to manage the reducers
| Function | How to use ( with dispatch ) |
| ------   | ------ |
| create    | *dispatch*( **create**('YOUR-OBJECT-NAME', { YOUR: OBJECT }) )|
| insert    | *dispatch*( **insert**(```DESTINATION```, 'OBJECT-NAME', {YOUR:OBJECT} ) )| 
| remove    | *dispatch*( **remove**('DESTINATION') )| 
| replace   | *dispatch*( **replace**('DESTINATION',{YOUR:OBJECT}) )| 
| update    | *dispatch*( **update**('DESTINATION', {YOUR:OBJECT}) )| 
| append    | *dispatch*( **append**('DESTINATION',[my-new-array-items]) )| 
| clear     | *dispatch*( **clear**('DESTINATION') )| 

*The details of how to use them in basic and ```DESTINATION``` in below*

### Create
This function is used to create an object or an array inside of the root reducer.
Each object has a unique name; if there is a *duplicated name*, the object's value will be *overridden*.

#### Create an object or array

```js
dispatch(create('YOUR-OBJECT-NAME', { YOUR: 'OBJECT' }));
```
```js
dispatch(create('YOUR-ARRAY-NAME', ['YOUR', 'ARRAY' ]));
```

### *Example:*
##### Create an object
I want to create an object named ```User``` from
https://jsonplaceholder.typicode.com/users/2

```JS
import { create } from "no-reducer";
...
const response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
await dispatch(create('User', response.data));
```
![create oject user](https://vnseattle.com/dynamicReducer/CreatedObjectUser2.png)

##### Create an array object 
I want to create an array named ```Users```, which stores a list of users in ```ds``` 

```js
import { create } from "no-reducer";
...
const response = await axios.get('https://jsonplaceholder.typicode.com/users');
await dispatch(create('Users', response.data));
```
![create array users](https://vnseattle.com/dynamicReducer/CreatedObjectUsers2.png)

##### Create nested objects and arrays
I will create my own json data with nested objects and arrays called ```MyClass```

```js
dispatch(create('MyClass', 
{
name: 'Computer',
students: [
    {
        id: 1,
        name: 'Bill Gate',
        companies: [{ cid: 1, name: 'Microsoft', found: 1975 }]
    },
    {
        id: 2,
        name: 'Steve Jobs',
        companies: [{ cid: 2, name: 'Apple', found: 1976 }]
    },
    {
        id: 3,
        name: 'Elon Musk',
        companies: [{ cid: 3, name: 'Tesla', found: 2003, 
        cars: [
        { mid: 1, n: 'Model X' }, 
        { mid: 2, n: 'Model Y' }, 
        { mid: 3, n: 'Model S' }] }, 
        { cid: 4, name: 'Paypal', found: 1999 }],
    },
    {
        id: 4,
        name: 'Mark Zuckerberg',
        companies: [{ cid: 5, name: 'Facebook', found: 2004 }]
    },
]
}));
```
![create array users](https://vnseattle.com/dynamicReducer/CreatedObjectNested2.png)


### *Destination path 
Before we walk through other functions, here is a definition of ```Destination Path``` in which we will use a symbol ```>``` to point out what particular object that we want to modify.

For example: we want to modify the ```name``` inside ```company``` inside the ```User```.
We have to write a path to go to that named object. In this case, we use ```>``` symbol to point out:
```js 
User>company>name 
```
![destination path 1](https://vnseattle.com/dynamicReducer/DestinationPath2.png)
Sometimes, you may need to go through an ```array of objects```; you can use a vertical bar ```|``` to determine which item in that array you want to go through.

For example: I want to modify ```companies``` in the item has ```id=3``` in array of ```students``` in object ```MyClass```. My destination path will be 
```js 
MyClass>students|id=3>companies 
```

See more examples at "Example of using *Destination Path*"

### Insert
Insert function is used to insert an object, an array, or data to a node in the reducer tree.
```js
dispatch(insert('DESTINATION', 'OBJECT-NAME', PAYLOAD )); 
```

There are 3 parameters: 
●	Destination which could be a *destination path* or the name of the object you want to insert to.
●	Object name: the name of the object 
●	Payload: the value of the object; it could be an object, array, or data. 

Example
We want to add an object ```{ food: ‘crawfish’ }``` to the User object.
```js
dispatch(insert('User', 'food', 'crawfish'));
```
![destination path 2](https://vnseattle.com/dynamicReducer/InsertAnObject2.png)


Insert an array ```meal: ["crawfish", "corn", "hotdog", "shrimp"]``` to the User 
```js
dispatch(insert('User', 'meal', ["crawfish", "corn", "hotdog", "shrimp"]));
```
![destination path 2](https://vnseattle.com/dynamicReducer/InsertMeal2.png)

#### Insert with condition
There are 2 optional parameters in case you want to insert the object to an item in an array
●	The value of the item that we want to find
●	The “key” of the value

```js
dispatch(insert('DESTINATION', 'OBJECT-NAME', PAYLOAD, VALUE, KEY )); 
```
Example:
We want to insert ```{ Nickname: ['Crawfish','Crawdad','Crayfish']}``` to the item that has ```id = 2``` in the ```Users```  array. 
So  the ```value``` is ```2``` and the ```key``` is ```id```.

```JS
dispatch(insert('Users', "Nickname", ['Crawfish','Crawdad','Crayfish'], 2, 'id'));
```
![Insert with condition](https://vnseattle.com/dynamicReducer/InsertWIthCondition.png)

#### Example of using *Destination Path*
I want to insert ```{ gps: {x,y,z} }``` into ```User>address>geo```
![Insert with condition](https://vnseattle.com/dynamicReducer/InsertWithDes.png)

### Remove 
There are two cases to remove objects
#### Remove an object
Remove the whole object by writing down the name of it. You can also use ```destination path``` to point to the object you want to remove.
```js
dispatch(remove('DESTINATION'))
```
Example: 
```js
dispatch(remove('User>address>geo'))
```
![Remove an object](https://vnseattle.com/dynamicReducer/removedObject2.png)

#### Remove an item in an array
To remove an item object in an array of objects, you can write the value key of the object you want to remove.
```js
dispatch(remove('DESTINATION',CONDITION-VALUE,CONDITION-KEY))
```
Example: Remove user with id=8 in Users
```js
dispatch(remove('Users', 8, 'id'))
```

![Remove an object](https://vnseattle.com/dynamicReducer/removeItemArray.png)

To remove an item in an array ( without key ), you can directly write the value which you want to remove.

Example: Remove a meal in food of User
```js
dispatch(remove('User>meal','shrimp))
```
![Remove an object](https://vnseattle.com/dynamicReducer/removeItemArrayNoKey.png)

### Replace 
![Remove an object](https://vnseattle.com/dynamicReducer/ReplaceIs.PNG)
There are two cases to replace objects
#### Replace an object
Replace the whole object by writing down the name of it. 
You can also use ```destination path``` to point to the object you want to remove.
```js
dispatch(replace('DESTINATION',PAYLOAD));
```
Example: replace ```name``` of ```User```
```js
dispatch(replace('User>name', "Crawfish Guy"))
```
![Replace an object](https://vnseattle.com/dynamicReducer/replaceAnObject.png)

#### Replace an item in an array
To replace an item object in an array of objects, you can write the value key of the object you want to replace.
```js
dispatch(replace('DESTINATION',CONDITION-VALUE,CONDITION-KEY))
```
Example: Replace User with ```id = 1``` in ```Users```
```js
dispatch(replace('Users', { name: "Crawfish" }, 1, 'id'))
```
![Replace an object](https://vnseattle.com/dynamicReducer/replaceObject.png)

To remove an item in an array ( without key ), you can directly write the value which you want to remove.
Example: change the meal crawfish to crayfish
```js
dispatch(replace('User>meal', "crayfish", 'crawfish'))
```
![Replace an object](https://vnseattle.com/dynamicReducer/replaceItemInArrayNoKey.png)
### Update
The difference between ```replace``` and ```update``` is the ```replace``` will remove the current object and place another object to its position. The ```update``` is just to change the attribute ( ```value``` ) based on the object's key. 
![What is Update](https://vnseattle.com/dynamicReducer/UpdateIs.PNG)
There are two cases to update objects
#### Update an object
Update the whole object by writing down the name of it. 
You can also use ```destination path``` to point to the object you want to update.
```js
dispatch(update('DESTINATION', {YOUR:OBJECT}))
```
Example: Update website of user
```js
dispatch(update('User', { website: "crawfish.com" }))
```
![What is Update](https://vnseattle.com/dynamicReducer/UpdateAnObject2.png)

#### Update an item in an array
To update an item object in an array of objects, you can write the value key of the object you want to update.
```js
dispatch(update('DESTINATION',CONDITION-VALUE,CONDITION-KEY))
```
Example: Update ```Users``` with ```id=2```
```js
dispatch(update('Users', { name: "Crawfish Lover" }, 2, 'id'))
```
![Update User with condition](https://vnseattle.com/dynamicReducer/UpdateUsersInArray.png)

Example: Using destination path. Update ```companies``` with ```cid=5``` in ```students``` with ```id=4``` in ```MyClass``` 
```js
dispatch(update('MyClass>students|id=4>companies', { name: "Meta" }, 5, 'cid'))
```
![Update Nested Array](https://vnseattle.com/dynamicReducer/updateTetedArray2.png)
### Append
Append is the function that is used to merge new array to an array.

```js
dispatch(append('DESTINATION',[my-new-array-items]));
```
Exmaple: Append new users
```js
response = await axios.get('https://jsonplaceholder.typicode.com/users');
await dispatch(append('Users', response.data))
```


### Clear
Clear is a function that we use to change the object's ```values``` to be ```null``` 
#### Clear an object
```js
dispatch(clear('DESTINATION'));
```
Example: Clear User
```js
await dispatch(clear('User'))
```
![Append to an Array](https://vnseattle.com/dynamicReducer/clearObject.png)
#### Clear an item in an array
```js
dispatch(clear('DESTINATION',CONDITION-VALUE,CONDITION-KEY));
```

Example: Clear Users with id = 7
```js
dispatch(clear('Users', 7, 'id'))
```
![Append to an Array](https://vnseattle.com/dynamicReducer/clearItemInAnArray.png)

Have fun <3
2022 Henry Nguyen (Dev9x)