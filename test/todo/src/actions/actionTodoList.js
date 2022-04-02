import { create, append, remove } from 'dynamic-reducer';

export const createList = (init = []) => {
    return (dispatch) => {
        dispatch(create('list', [...init]))
    }
}

export const addToList = (item) => {
    return (dispatch) => {
        console.log(item)
        dispatch(append('list', item))
    }
};

export const deleteItem = (item) => {
    return (dispatch) => {
        dispatch(remove('list', item));
    }
}