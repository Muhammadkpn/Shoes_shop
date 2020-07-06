export const productReducer =  (state = [], action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            console.log("Slider  Reducer ", action.payload)
            return action.payload
        default:
            return state
    }
}