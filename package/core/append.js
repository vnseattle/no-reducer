import { analyzeObject } from "./helpers";
/**********************************
 * Append items to current array
 **********************************/
export const APPEND = (state, action) => {

    const { pathObjects, targetIndex, targetName } = analyzeObject(state, action);

    // Append to current array
    pathObjects[targetIndex][targetName] =
        [...pathObjects[targetIndex][targetName], typeof action.payload === 'string' ? action.payload : { ...action.payload }]

    return { ...pathObjects[0] }
}
