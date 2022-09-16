/**********************************
 * add payload to object tree 
 **********************************/
export const REFRESH = (state, action) => {
    let currState = { ...state }
    const isPayloadArray = Array.isArray(action.payload);
    if (isPayloadArray) {
        action.names.forEach((name, index) => currState = { ...currState, [name]: action.payload[index] })
    } else {
        for (let i = 0; i < action.names.length; i++) {
            currState = { ...currState, [action.names[i]]: action.payload[action.names[i]] }
        }
    }

    return currState
}
