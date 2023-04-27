import state from "./server-state"
const API = "http://localhost:3000"


export const getAllTodos = () => state.get(`${API}/todos`)

export const addNewItem = (title) => state.post(`${API}/todos`,{title,completed:false})

export const setCompletedItem = (todo) => state.put(`${API}/todos/${todo.id}`,{...todo, completed:!todo.completed},{state:'todos'})

export const deleteItem = (todo) => state.delete(`${API}/todos/${todo.id}`, null ,{state:'todos'})

