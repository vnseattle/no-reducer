import {create} from "no-reducer"
import state from "./server-state"
const API = "http://localhost:3000/"

export const getClassList = () => state.get(`${API}endpoint-class-list`)

export const getStudentsList = (className = "Computer Science") => state.get(`${API}endpoint-student-in-cs-class`)

export const setCurrentClass = (className) =>  (dispatch) => dispatch(create('currentClass', {name: className}))
