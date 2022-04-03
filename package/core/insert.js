import { nameToArray, createPathObjects, getTargetIndex } from "./helpers";
/*********************************************
 * insert an object to a node in object tree
 ********************************************/
export const INSERT = (state, action) => {
    const nameArr = nameToArray(action.name)
    const pathObjects = createPathObjects(state, nameArr)
    const targetIndex = nameArr.length - 1
    const targetName = nameArr[targetIndex].split('|')[0]
    if (!action.value) {
        pathObjects[targetIndex][targetName] = { ...pathObjects[targetIndex][targetName], [action.payloadName]: action.payload }
    } else {
        const targetObjectArr = pathObjects[targetIndex][targetName]
        let index = getTargetIndex(action, targetObjectArr);
        if (index >= 0) {
            pathObjects[targetIndex][targetName] = [...targetObjectArr.slice(0, index), { ...targetObjectArr[index], [action.payloadName]: action.payload }, ...targetObjectArr.slice(index + 1)]
        }
    }
    return { ...pathObjects[0] }
}