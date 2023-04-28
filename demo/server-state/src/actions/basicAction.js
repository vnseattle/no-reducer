import state from "./server-state"
import { append } from "no-reducer"
const API = "http://localhost:3000"



/********* BASIC ACTIONS ***********************/

/**
These returns are an array without a key object.
And it doesn't have a config to specify the name of the reducer.
Therefore, the endpoint will be the name of the reducer.
*/
export const getAllTodos = () => state.get(`${API}/todos`)

export const addNewItem = (title) => state.post(`${API}/todos`,{title,completed:false})


/**
These returns are an array without a key object.
The endpoint cannot be determined the reducer's name.
Hence, we need to create a config that specifies the name of the reducer.
*/

const cfg = {state:"todos"}

export const setCompletedItem = (todo) => state.put(`${API}/todos/${todo.id}`,{...todo, completed:!todo.completed},cfg)

export const deleteItem = (todo) => state.delete(`${API}/todos/${todo.id}`, null ,cfg)



export const addSampleItem = () => {
    return async (dispatch) => {
        try {
            await dispatch(append('todos', [{id:999, title:"This task is not stored in Database", completed:true}]))
        } catch (err) {
            console.log(err)
        }
    };
}