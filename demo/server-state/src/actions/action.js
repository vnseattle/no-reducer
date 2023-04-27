import state from "./server-state"
import { append } from "no-reducer"
const API = "http://localhost:3000"


export const getAllTodos = () => state.get(`${API}/todos`)

export const addNewItem = (title) => state.post(`${API}/todos`,{title,completed:false})

export const setCompletedItem = (todo) => state.put(`${API}/todos/${todo.id}`,{...todo, completed:!todo.completed},{state:'todos'})

export const deleteItem = (todo) => state.delete(`${API}/todos/${todo.id}`, null ,{state:'todos'})



export const addSampleItem = () => {
    return async (dispatch) => {
        try {
            await dispatch(append('todos', [{id:999, title:"This task is not stored in Database", completed:true}]))
        } catch (err) {
            console.log(err)
        }
    };
}