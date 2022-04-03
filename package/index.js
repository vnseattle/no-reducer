/*************************************************************
No Reducer
© 2022 Henry Nguyen a.k.a Dev9x
No-Reducer is a utility that helps developers manage the store 
reducer without touching any reducer.
************************************************************/

import { CREATE } from './core/create';
import { REMOVE } from './core/remove';
import { INSERT } from './core/insert';
import { REPLACE } from './core/replace';
import { UPDATE } from './core/update';
import { APPEND } from './core/append';
import { CLEAR } from './core/clear';

/*************************************************************
 * Reducer Routers 
 ************************************************************/
export const reducer = (state = {}, action) => {
    switch (action.type) {
        case `CREATE`:
            return CREATE(state, action);
        case "REMOVE":
            return REMOVE(state, action);
        case "INSERT":
            return INSERT(state, action);
        case "REPLACE":
            return REPLACE(state, action);
        case "UPDATE":
            return UPDATE(state, action);
        case "APPEND":
            return APPEND(state, action);
        case "CLEAR":
            return CLEAR(state, action);
        default:
            return state

    }
}

/*************************************************************
 * create 
 * @name : object name or target path
 * @payload : input object 
 ************************************************************/
export const create = (name, payload) => {
    return {
        type: `CREATE`,
        name,
        payload,
    }
}

/*************************************************************
 * remove 
 * @name : object name or target path
 * @value : value to find object in an array (optional)  
 * @target : key to find object in an array (optional)
 ************************************************************/
export const remove = (name, value, target) => {
    return {
        type: "REMOVE",
        name,
        value,
        target
    }
}

/*************************************************************
 * insert 
 * @name : object name or target path
 * @payloadName : the key of the payload 
 * @payloadName : the value of the payload  
 * @value : value to find object in an array (optional)  
 * @target : key to find object in an array (optional)
 ************************************************************/
export const insert = (name, payloadName, payload, value, target) => {
    return {
        type: "INSERT",
        name,
        payloadName,
        payload,
        value,
        target
    }
}

/*************************************************************
 * replace 
 * @name : object name or target path
 * @payload : input object 
 * @value : value to find object in an array (optional)  
 * @target : key to find object in an array (optional)
 ************************************************************/
export const replace = (name, payload, value, target) => {
    return {
        type: "REPLACE",
        name,
        value,
        target,
        payload,
    }
}

/*************************************************************
 * update 
 * @name : object name or target path
 * @payload : input object 
 * @value : value to find object in an array (optional)  
 * @target : key to find object in an array (optional)
 ************************************************************/
export const update = (name, payload, value, target) => {
    return {
        type: "UPDATE",
        name,
        value,
        target,
        payload,
    }
}

/*************************************************************
 * append 
 * @name : array name or target path
 * @payload : input array 
 ************************************************************/
export const append = (name, payload) => {
    return {
        type: "APPEND",
        name,
        payload,
    }
}

/*************************************************************
 * clear 
 * @name : object name or target path
 * @value : value to find object in an array (optional)  
 * @target : key to find object in an array (optional)
 ************************************************************/
export const clear = (name, value, target) => {
    return {
        type: "CLEAR",
        name,
        value,
        target,
    }
}

