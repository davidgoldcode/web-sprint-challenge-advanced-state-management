import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import sendSmurfs, { ADD_DATA } from '../store/actions/sendSmurfActions'

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

function AddSmurf(props) {
    
    const [formValues, setFormValues] = useState(initialFormValues)

    const changeHandler = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setFormValues({ ...formValues, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formValues, "FORM VALUESSSS");
        console.log(props.sendSmurfs, "FORM VALUESSSS");
        props.sendSmurfs(formValues);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                name='name'
                value={formValues.name}
                onChange={changeHandler}
                placeholder='Type smurf name'
                />

                <input
                type='text'
                name='age'
                value={formValues.age}
                onChange={changeHandler}
                placeholder='Type smurf age'
                />

                <input
                type='text'
                name='weight'
                value={formValues.weight}
                onChange={changeHandler}
                placeholder='Type smurf weight'
                />

                <button>Submit new Smurf</button>
                
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      state,
    }
  }

  export default connect(mapStateToProps, { sendSmurfs })(AddSmurf);
