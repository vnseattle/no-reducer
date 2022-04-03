import { create, append, remove, update } from 'no-reducer';

// CREATE
export const selectItem = (id) => {
    return (dispatch) => {
        dispatch(create('selectedId', id))
    }
}

// APPEND
export const addToList = (item) => {
    return (dispatch) => {
        dispatch(append('list', item))
    }
};

// REMOVE
export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch(remove('list', id, 'id'));
    }
}


// UPDATE
export const saveItemInList = (id, task) => {
    return (dispatch) => {
        dispatch(update('list', { task: task }, id, 'id'))
    }
}