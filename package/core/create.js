export const CREATE = (state, action) => {
    return { ...state, [action.name]: action.payload }
}
