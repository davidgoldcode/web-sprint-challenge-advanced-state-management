import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA } from "../actions"

export const initialState = {
    name: '',
    age: '', 
    height: '',
    id: '', 
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id,
            }
        case FETCH_DATA_FAILURE: 
            return {
                ...state,
                errorMessage: action.payload.message,
            }
        default:
            return state;            
    }
}