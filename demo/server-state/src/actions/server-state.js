import { create, append, remove, update, replace, refresh } from 'no-reducer';
import axios from "axios"

const stateRequest =  {

    get : (url, config) =>{
        return async (dispatch) => {
            const res = await axios.get(url,config)
            let object = {};

            if(config && config.root){
                const isArray = Array.isArray((res.data[config.root]))
                object = res.data[config.root]
                if(isArray){
                    if(res.data[config.root].length === 1){
                        object = res.data[config.root][0]
                    }
                }

            }else{

                // if the result is an array, create a key for it
                if(Array.isArray(res.data)){
                    const urlArray = url.split('/');
                    const objName = urlArray[urlArray.length-1]
                    object = {[objName] :  res.data}

                }else{
                    object =  res.data
                }
              
            }
           

            for (const key in object) {
                dispatch(create(key,object[key]))
              }
        }
    }
    

}


export default stateRequest