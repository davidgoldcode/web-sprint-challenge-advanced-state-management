import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import addSmurfReducer from '../store/reducers/addSmurfReducer';
import { ADD_DATA } from '../store/actions/sendSmurfActions';

// const apiCall = (value) = {
//     axios 
//     .post('http://localhost:3333/smurfs', creds)
//     .then(res => {
//         debugger
//         console.log(res.data);
//         dispatch({ type: ADD_DATA_SUCCESS, payload: res.data})
//     })
//     .catch(err => {
//         debugger
//         console.log(err)
//         dispatch({ type: ADD_DATA_FAILURE, payload: {message: 'Error'}})
//     })
// }


function AddSmurf(props) {
    console.log(props, "ADDSMURF");     
    
    const handler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        addSmurfReducer(event.target.value);
    }


    return(
        <div>
            <form onSubmit={handler}>
                <input
                type='text'
                value={}
                placeholder='name'
                />
                
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      state
    }
  }

  export default connect(mapStateToProps, { addSmurfReducer })(AddSmurf);
