import { ADD_DATA_FAILURE, ADD_DATA_SUCCESS, ADD_DATA } from "../actions/sendSmurfActions"

export const formInitialState = {
    name: '',
    age: '', 
    height: '',
    id: '', 
}

const addSmurfReducer = (state = formInitialState, action) => {
    switch(action.type) {
        case ADD_DATA:
            return {
                ...state,
                value: action.payload,
            }
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id,
            }
        case ADD_DATA_FAILURE: 
            return {
                ...state,
                errorMessage: action.payload.message,
            }
        default:
            return state;            
    }
}

export default addSmurfReducer;