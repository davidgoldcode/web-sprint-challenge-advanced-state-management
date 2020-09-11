import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import sendSmurfs, { ADD_DATA } from '../store/actions/sendSmurfActions'
import { initialState } from '../store/reducers';

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

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formValues, "FORM VALUESSSS");
    //     console.log(props.sendSmurfs, "FORM VALUESSSS");
    //     props.sendSmurfs(formValues);
    // }

        const onSubmit = (event) => {
        event.preventDefault();
        console.log("FORMVALUES", formValues);
        axios 
            .post('http://localhost:3333/smurfs', formValues)
            .then(res => setFormValues(initialFormValues))
            .catch(err => { console.log('error')})
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
                name='height'
                value={formValues.height}
                onChange={changeHandler}
                placeholder='Type smurf height'
                />

                <button>Submit new Smurf</button>
                
            </form>
        </div>
    )
}

  export default AddSmurf;
