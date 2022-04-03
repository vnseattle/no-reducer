/**
 * get object's children
 * @param {*} object 
 * @param {*} name of the child
 * @returns object's children
 */
export const getChildren = (obj, name) => {
    if (name.indexOf('|') > 0) {
        const rname = name.split('|')[0];
        const cmd = name.split('|')[1];
        const key = cmd.split('=')[0];
        const val = cmd.split('=')[1];
        return obj[rname].filter(elm => elm[key] == val)[0];
    }
    return obj[name]
}

/**
 * convert a string to an array
 * @param {*} name as a string
 * @returns a string name to an array
 */
export const nameToArray = (name) => {
    return name.split('>');
}


/**
 * push all objects in an array
 * @param {*} state 
 * @param {*} object names in arrary
 * @returns an object array
 */
export const createPathObjects = (state, nameArr) => {
    const pathObjects = [state];
    let tmpObj = state;
    nameArr.forEach(elm => {
        tmpObj = getChildren(tmpObj, elm);
        pathObjects.push(tmpObj);
    })
    return pathObjects;
}

/**
 * get index of target if the target is an array
 * @param {*} action 
 * @param {*} target object
 * @returns index 
 */
export const getTargetIndex = (action, targetObjectArr) => {
    let index = targetObjectArr.findIndex(elm => elm[action.target] === action.value);
    if (index === -1) {
        index = targetObjectArr.findIndex(elm => elm === action.value);
    }
    return index
}

/**
 * set all values be null
 * @param {*} object 
 * @returns all values be null
 */
export const clearObject = (object) => {
    if (typeof object === 'object') {
        return [object].map(obj => {
            obj = Object.assign({}, obj);
            for (let i in obj) {
                obj[i] = null
            }
            return obj;
        })[0];
    }
    return null

}

/**
 * analyze input from user
 * @param {*} state 
 * @param {*} action 
 * @returns objects in array, target index, target name
 */
export const analyzeObject = (state, action) => {
    const nameArr = nameToArray(action.name); // names in array
    const pathObjects = createPathObjects(state, nameArr); // objects in array   
    const targetIndex = nameArr.length - 1; // get target index
    const targetName = nameArr[targetIndex].split('|')[0]; // target object's name
    return { pathObjects, targetIndex, targetName }
} 