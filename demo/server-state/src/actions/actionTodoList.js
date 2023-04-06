import { create, append, remove, update, replace } from 'no-reducer';
// CREATE
export const selectItem = (id) => {
    return (dispatch) => {
        
    }
}

// APPEND
export const addToList = (item) => {
    return (dispatch) => {
        
        dispatch(append('list', [item]))
    }
};

// REMOVE, REPLACE
export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch(remove('list', id, 'id'));
        dispatch(replace('selectedId', null));
    }
}


// UPDATE
export const saveItemInList = (id, task) => {
    return (dispatch) => {
        dispatch(update('list', { task: task }, id, 'id'))
    }
}