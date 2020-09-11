import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import addSmurfReducer from '../store/reducers/addSmurfReducer';

function AddSmurf({name}) {
    
    const handler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        addSmurfReducer(event.target.value);
    }


    return(
        <div>
            <form>
                <input
                type='text'
                value={name}
                onChange={handler}
                placeholder='name'
                />
            </form>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//       name: state.name,
//       age: state.age,
//       height: state.height,
//       id: state.id,
//     }
//   }

  export default connect(null, { addSmurfReducer })(AddSmurf);
