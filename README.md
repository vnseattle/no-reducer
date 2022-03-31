# Dynamic Reducer 
Dynamic Reducer is a utility that helps developers manage the store reducer faster, easier and cleaner. Although this library is developed to work with Redux, this is an add-on library; developers can also use it with any reducer in any pattern.

![create oject user](https://vnseattle.com/dynamicReducer/intro.png)
# Example

#### WITHOUT Dynamic Reducer 
```js
// ACTION
export const action = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(actionCreator(response.data)); // Dynamic reducer command
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
### With Dynamic Reducer 
```js
import {create} from 'dynamic-reducer'

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

// Dynamic Reducer will work on Reducers and Action Creators for you
```
### Set it up
To use this Dynamic Reducer, you need a simple installation by importing this Dynamic Reducer Library on the page of “combineReducers”.You can name any name you want for the dynamic store object. 

For example, I named it “ds” in the combineReducers of Redux.
```js
import { combineReducers } from "redux";
import { reducer } from "dynamic-reducer";

export default combineReducers({
    ds: reducer
});
```

![create array users](https://vnseattle.com/dynamicReducer/setup.PNG)

## How to use 

Import functions from the library.

```js
import { create, remove, insert, replace, update, append, clear } from "dynamic-reducer"
```
Here are functions to manage the dynamic store 
| Function | How to use ( with dispatch ) |
| ------ | ------ |
| create | *dispatch*( **create**('YOUR-OBJECT-NAME', { YOUR: 'OBJECT' }) )|
| remove| |
|insert| |

*The details of how to use them in basic and advanced in below*

### Create
This function is used to create an object or an array inside of the root dynamic store.
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
I want to create an object named *user* which the basic information from
https://jsonplaceholder.typicode.com/users/2

```JS
import { create } from "ABCLIB";
...
const response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
await dispatch(create('User', response.data));
```
![create oject user](https://vnseattle.com/dynamicReducer/CreatedObjectUser.PNG)

##### Create an array object 
I want to create an array named *users*, which stores a list of users in “ds” 

```js
import { create } from "ABCLIB";
...
const response = await axios.get('https://jsonplaceholder.typicode.com/users');
await dispatch(create('Users', response.data));
```
![create array users](https://vnseattle.com/dynamicReducer/CreatedObjectUsers.PNG)

##### Create nested objects and arrays

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
![create array users](https://vnseattle.com/dynamicReducer/CreateNestedObject.png)


### *Destination path 
Before we walk through other functions, here is a definition of “Destination Path” in which we will use a symbol “>” to point out what particular object that we want to modify.

For example: we want to modify the company's name inside the User. We have to write a path to go to that named object. In this case, we use “>” symbol to point out:
```js 
User>company>name 
```
![destination path 1](https://vnseattle.com/dynamicReducer/DestinationPath.PNG)

See more examples at "Example of using *Destination Path*"

Sometimes, you may need to go through an array of objects; you can use a vertical bar to determine which item in that array you want to go through. 
For example: Users|id=3>name  

![destination path 2](https://vnseattle.com/dynamicReducer/DestinationPath2.PNG)

### Insert
Insert function is used to insert an object, an array, or data to a node in the dynamic store tree.
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
![destination path 2](https://vnseattle.com/dynamicReducer/InsertFoodUser.PNG)


Insert an array ```meal: ["crawfish", "corn", "hotdog", "shrimp"]``` to the User 
```js
dispatch(insert('User', 'meal', ["crawfish", "corn", "hotdog", "shrimp"]));
```
![destination path 2](https://vnseattle.com/dynamicReducer/InsertArrayMeal.PNG)

#### Insert with condition
There are 2 optional parameters in case you want to insert the object to an item in an array
●	The value of the item that we want to find
●	The “key” of the value

```js
dispatch(insert('DESTINATION', 'OBJECT-NAME', PAYLOAD, VALUE, KEY )); 
```
Example:
We want to insert ```{ Nickname: ['Crawfish','Crawdad','Crayfish']}``` to the item that has id = 2 in the Users array. So the key is “id,” and “2” is the value. 

```JS
dispatch(insert('Users', "Nickname", ['Crawfish','Crawdad','Crayfish'], 2, 'id'));
```
![Insert with condition](https://vnseattle.com/dynamicReducer/InsertNicknames.png)

#### Example of using *Destination Path*
I want to insert ```{ gps: {x,y,z} }``` into ```User>address>geo```
![Insert with condition](https://vnseattle.com/dynamicReducer/InsertGPS.PNG)

### Remove 
There are two cases to remove objects
#### Remove an object
Remove the whole object by writing down the name of it. You can also use destination path* to point to the object you want to remove.
```js
dispatch(remove('DESTINATION'))
```
Example: 
```js
dispatch(remove('User>address>geo'))
```
![Remove an object](https://vnseattle.com/dynamicReducer/RemoveAnObject.PNG)

#### Remove an item in an array
To remove an item object in an array of objects, you can write the value key of the object you want to remove.
```js
dispatch(remove('DESTINATION',CONDITION-VALUE,CONDITION-KEY))
```
Example: Remove user with id=8 in Users
```js
dispatch(remove('Users', 8, 'id'))
```
To remove an item in an array ( without key ), you can directly write the value which you want to remove.

Example: Remove a meal in food of User
```js
dispatch(remove('User>meal','shrimp))
```

### Replace 
There are two cases to replace objects
#### Replace an object
Replace the whole object by writing down the name of it. You can also use destination path* to point to the object you want to remove.
```js
dispatch(replace('DESTINATION',PAYLOAD));
```
Example: replace name of user
```js
dispatch(replace('User>name', "Crawfish Guy"))
```

#### Replace an item in an array
To replace an item object in an array of objects, you can write the value key of the object you want to replace.
```js
dispatch(replace('DESTINATION',CONDITION-VALUE,CONDITION-KEY))
```
Example: Replace User with id 1 in Users
```js
dispatch(replace('Users', { name: "Crawfish" }, 1, 'id'))
```
To remove an item in an array ( without key ), you can directly write the value which you want to remove.

Example: change the meal crawfish to crayfish
```js
dispatch(replace('User>meal', "crayfish", 'crawfish'))
```

### Update
The difference between 'replace' and 'update' is the replace will remove the current object and place another object to its position. The update is just to change the attribute ( value ) based on the object's key. 

There are two cases to update objects
#### Update an object
Update the whole object by writing down the name of it. You can also use destination path* to point to the object you want to update.
```js
dispatch(update('DESTINATION', {YOUR:OBJECT}))
```
Example: Update website of user
```js
dispatch(update('User', { website: "crawfish.com" }))
```

#### Update an item in an array
To update an item object in an array of objects, you can write the value key of the object you want to update.
```js
dispatch(update('DESTINATION',CONDITION-VALUE,CONDITION-KEY))
```
Example: Update user with id=2
```js
dispatch(update('Users', { name: "Crawfish Lover" }, 2, 'id'))
```

Example: Using destination path
```js
dispatch(update('MyClass>students|id=4>companies', { name: "Meta" }, 5, 'cid'))
```

### Append
Append is the function that is used to add new elements to an array. That’s it. 

```js
dispatch(append('DESTINATION',[my-new-array-items]));
```
Exmaple: Append new users

```js
response = await axios.get('https://jsonplaceholder.typicode.com/users');
await dispatch(append('Users', response.data))
```

### Clear
Clear is a function that we use to “remove all” the object's value. 

#### Clear an object
```js
dispatch(clear('DESTINATION'));
```
Example: Clear User
```js
await dispatch(clear('User'))
```
#### Clear an item in an array
```js
dispatch(clear('DESTINATION',CONDITION-VALUE,CONDITION-KEY));
```

Example: Clear Users with id = 7
```js
dispatch(clear('Users', 7, 'id'))
```

End 