import React from 'react';
import { connect } from 'react-redux';

function Smurfs(props) {

    return(
        <>
        {/* {props.smurf.map((item) => (
            <>
            <h1>{item.name}</h1>
            <h3>{item.age}</h3>
            <h3>{item.height}</h3>
            </>
        ))} */}
        </>
    )
}

function mapStateToProps(state) {
    return {
        state
    }
}

  export default connect(mapStateToProps, {})(Smurfs);
