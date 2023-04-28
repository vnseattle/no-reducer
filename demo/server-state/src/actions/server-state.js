/*************************************************************
Redux Server State
© 2023 Henry Nguyen a.k.a Dev9x
This library is designed to retrieve the results from an API request 
and store them as a state in the reducer on the client-side.
************************************************************/

import { create, append } from 'no-reducer';
import axios from "axios"

const stateRequest =  {

    get : (url, config) =>{
        return async (dispatch) => {
            const res = await axios.get(url,config)
            dispatch(handleReturn(url,config,res))
        }
    },

    post : (url, payload ,config) =>{
        return async (dispatch) => {
            const res = await axios.post(url,payload,config)
            dispatch(handleReturn(url,config,res))
        }
    },

    put : (url, payload ,config) =>{
        return async (dispatch) => {
            const res = await axios.put(url,payload,config)
            dispatch(handleReturn(url,config,res))
        }
    },

    delete : (url, payload ,config) =>{
        return async (dispatch) => {
            const res = await axios.delete(url,payload,config)
            dispatch(handleReturn(url,config,res))
        }
    },

    patch : (url, payload ,config) =>{
        return async (dispatch) => {
            const res = await axios.patch(url,payload,config)
            dispatch(handleReturn(url,config,res))
        }
    }
    
    

}

const handleReturn = (url,config,res) =>{
    return async (dispatch) => {
        // The result is not in root level, navigate to it
        if(config && config.root){
            const isArray = Array.isArray((res.data[config.root]))
            if(isArray){
                if(res.data[config.root].length === 1){
                    dispatch(handleStateName(url,res.data[config.root][0],config))
                }
            }else{
                dispatch(handleStateName(url,res.data[config.root],config))
            }
        }else{
            dispatch(handleStateName(url,res.data,config))
          
        }
       

      
    }

}

// if the result is an array, there is no object name
const handleStateName = (url,object, config) => {
    return async (dispatch) => {
            // if the config give a name
            if(config && config.state){
                object = {[config.state] :  object}

            // No name, no hope, use endpoint as a state name
            }else if(Array.isArray(object)){
                const urlArray = url.split('/');
                const objName = urlArray[urlArray.length-1].split('?')[0]
                object = {[objName] :  object}
            }

            let i = 0;
            for (const key in object) {
                if(config && config.action){
                    if(config.action[i]==="append"){
                        dispatch(append(key,[...object[key]]))
                    }
                }else{
                    dispatch(create(key,object[key]))
                }

                i++; 
            }
    
    }
}

export default stateRequest