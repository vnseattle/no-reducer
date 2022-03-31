import { nameToArray, createPathObjects } from "./helpers";

export const APPEND = (state, action) => {
    const nameArr = nameToArray(action.name);
    const pathObjects = createPathObjects(state, nameArr);
    const targetIndex = nameArr.length - 1;
    const targetName = nameArr[targetIndex].split('|')[0]
    pathObjects[targetIndex][targetName] = [...pathObjects[targetIndex][targetName], ...action.payload]
    return { ...pathObjects[0] }
}
