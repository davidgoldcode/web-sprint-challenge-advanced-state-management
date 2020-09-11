import axios from 'axios';

export const ADD_DATA = 'ADD_DATA';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE';

const sendSmurfs = (creds) => {
    return (dispatch) => {
        dispatch({ type: ADD_DATA })
        axios 
            .post('http://localhost:3333/smurfs', creds)
            .then(res => {
                dispatch({ type: ADD_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: ADD_DATA_FAILURE, payload: err})
            })
    }
}

export default sendSmurfs;