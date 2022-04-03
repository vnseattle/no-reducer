/**********************************
 * add payload to object tree 
 **********************************/
export const CREATE = (state, action) => {
    return { ...state, [action.name]: action.payload }
}
