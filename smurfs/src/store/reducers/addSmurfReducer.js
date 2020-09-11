import { ADD_DATA_FAILURE, ADD_DATA_SUCCESS, ADD_DATA } from "../actions/sendSmurfActions"

export const formInitialState = {
    smurf: [],
    error: '',
    isFetching: false,
}

const addSmurfReducer = (state = formInitialState, action) => {
    console.log(state, action, "ADDSMURFREDUCER")
    switch(action.type) {
        case ADD_DATA:
            return {
                ...state,
                isFetching: true,
            }
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                smurf: [{
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height,
                }],
                isFetching: false,
            }
        case ADD_DATA_FAILURE: 
            return {
                errorMessage: action.payload.message,
            }
        default:
            return state;            
    }
}

export default addSmurfReducer;