import { create } from 'no-reducer';
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
            console.log('root')
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
            if(config && config?.state){
                object = {[config.state] :  object}

            // No name, no hope, use endpoint as a state name
            }else if(Array.isArray(object)){
                const urlArray = url.split('/');
                const objName = urlArray[urlArray.length-1]
                object = {[objName] :  object}
            }


            for (const key in object) {
                dispatch(create(key,object[key]))
            }
    
    }
}

export default stateRequest