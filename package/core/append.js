import { analyzeObject } from "./helpers";
/**********************************
 * Append items to current array
 **********************************/
export const APPEND = (state, action) => {
    console.log('append', typeof action.payload)
    const { pathObjects, targetIndex, targetName } = analyzeObject(state, action);

    // Append to current array
    if (typeof action.payload === 'object') {
        pathObjects[targetIndex][targetName] = [...pathObjects[targetIndex][targetName], ...action.payload]
    } else {
        pathObjects[targetIndex][targetName] = [...pathObjects[targetIndex][targetName], action.payload]

    }

    return { ...pathObjects[0] }
}
