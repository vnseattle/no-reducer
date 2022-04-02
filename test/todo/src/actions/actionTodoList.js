import { create, append, replace } from 'dynamic-reducer';

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
