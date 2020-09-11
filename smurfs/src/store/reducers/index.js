import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA } from "../actions"

export const initialState = {
    smurf: [{
            name: '',
            age: '',
            height: '',
            id: '',
        }],
}

export const reducer = (state = initialState, action) => {
    console.log("MY STATE", state);
    switch(action.type) {
        case FETCH_DATA:
            return []
        case FETCH_DATA_SUCCESS:
            return {smurf: [...state, { ...action.payload }]}
        case FETCH_DATA_FAILURE: 
            return [...state, {errorMessage: action.payload.message}]
        default:
            return state;            
    }
}