import { nameToArray, createPathObjects, getTargetIndex, clearObject } from "./helpers";
/***************************************
 * Clear objects, set all value to null
 ***************************************/
export const CLEAR = (state, action) => {
    const nameArr = nameToArray(action.name)
    const pathObjects = createPathObjects(state, nameArr)
    const targetIndex = nameArr.length - 1
    const targetName = nameArr[targetIndex].split('|')[0]

    if (!action.value) {

        pathObjects[targetIndex][targetName] = clearObject(pathObjects[targetIndex][targetName]);
    } else {
        const targetObjectArr = pathObjects[targetIndex][targetName]
        let index = getTargetIndex(action, targetObjectArr);

        if (index >= 0) {
            pathObjects[targetIndex][targetName] = [...targetObjectArr.slice(0, index),
            clearObject(targetObjectArr[index])
                , ...targetObjectArr.slice(index + 1)]
        }
    }
    return { ...pathObjects[0] }
}