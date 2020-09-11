import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA })
        axios 
            .get('http://localhost:3333/smurfs')
            .then(res => {
                debugger
                console.log("axios success =>", res.data);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                debugger
                console.log(err)
                dispatch({ type: FETCH_DATA_FAILURE, payload: {message: 'Error'}})
            })
    }
}

export default fetchSmurfs;