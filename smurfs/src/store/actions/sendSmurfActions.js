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
                debugger
                console.log(res.data);
                dispatch({ type: ADD_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                debugger
                console.log(err)
                dispatch({ type: ADD_DATA_FAILURE, payload: {message: 'Error'}})
            })
    }
}

export default sendSmurfs;