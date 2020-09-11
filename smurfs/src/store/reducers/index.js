import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA } from "../actions"
import { ADD_DATA, ADD_DATA_SUCCESS, ADD_DATA_FAILURE } from "../actions/sendSmurfActions"

export const initialState = {
    smurf: [],
    error: '',
    isFetching: false,
}

export const reducer = (state = initialState, action) => {
    console.log("MY STATE", state, action.payload);
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,                
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurf: action.payload,
            }
        case FETCH_DATA_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        case ADD_DATA:
            return {
                ...state,
                isFetching: true,
            }
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                smurf: [action.payload],
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