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

export const nameToArray = (name) => {
    return name.split('>');
}


export const createPathObjects = (state, nameArr) => {
    const pathObjects = [state];
    let tmpObj = state;
    nameArr.forEach(elm => {
        tmpObj = getChildren(tmpObj, elm);
        pathObjects.push(tmpObj);
    })
    return pathObjects;
}

export const getTargetIndex = (action, targetObjectArr) => {
    let index = targetObjectArr.findIndex(elm => elm[action.target] === action.value);
    if (index === -1) {
        index = targetObjectArr.findIndex(elm => elm === action.value);
    }
    return index
}


export const clearObject = (object) => {
    return [object].map(obj => {
        obj = Object.assign({}, obj);
        for (let k in obj) {
            if (typeof obj[k] === 'object') {
                obj[k] = null
            } else if (isNaN(obj[k])) {
                obj[k] = ''
            } else {
                obj[k] = -1
            }
        }
        return obj;
    })[0];
}