import { nameToArray, createPathObjects } from "./helpers";
/**********************************
 * Append items to current array
 **********************************/
export const APPEND = (state, action) => {
    const nameArr = nameToArray(action.name);
    const pathObjects = createPathObjects(state, nameArr);
    const targetIndex = nameArr.length - 1;
    const targetName = nameArr[targetIndex].split('|')[0]
    pathObjects[targetIndex][targetName] = [...pathObjects[targetIndex][targetName], typeof action.payload === 'string' ? action.payload : { ...action.payload }]

    return { ...pathObjects[0] }
}
