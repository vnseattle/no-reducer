import { create, append, remove, update, replace, refresh } from 'no-reducer';
import axios from "axios"

const stateRequest =  {

    get : (url, config) =>{
        return async (dispatch) => {
            const data = await axios.get(url,config)
            dispatch(create(`${data}`,data))
            
          
        }
    }
    

}

/**
 * 
 * 
 
post : (url,obj,payload,config) =>{
        return async (dispatch) => {
            const data = await axios.post(url,payload,config)
            for(let i=0; i<obj.length;i++){
                dispatch(create(`${obj[i].target}`,data[`${obj[i].src}`]))
            }
          
        }
    },

    get : (url,obj,config) =>{
        return async (dispatch) => {
            const data = await axios.get(url,config)
            for(let i=0; i<obj.length;i++){
                dispatch(create(`${obj[i].target}`,data[`${obj[i].src}`]))
            }
          
        }
    },

    stateGet: (endpoint,config) =>{
        return request.get(endpoint.url,endpoint.reducers,config)
    },

    statePost: (endpoint,payload,config) =>{
        return request.post(endpoint.url,endpoint.reducers,payload,config)
    }
 */

export default stateRequest