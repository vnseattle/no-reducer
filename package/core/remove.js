import { analyzeObject, getTargetIndex } from "./helpers";

/*********************************************
 * remove target object
 ********************************************/
export const REMOVE = (state, action) => {
    const { pathObjects, targetIndex, targetName } = analyzeObject(state, action);

    // if object is NOT in an array
    if (!action.value) {
        delete pathObjects[targetIndex][targetName]
    } else {
        // target object in array
        const targetObjectArr = pathObjects[targetIndex][targetName]
        let index = getTargetIndex(action, targetObjectArr);
        // find index of the item in array
        if (index >= 0) {
            pathObjects[targetIndex][targetName] = [...targetObjectArr.slice(0, index), ...targetObjectArr.slice(index + 1)]
        }
    }
    return { ...pathObjects[0] }
}

