import React from 'react';
import { connect } from 'react-redux';

function Smurfs({smurfs}) {

    return(
        <>
        {smurfs.map((item) => (
            <>
            <h1>{item.name}</h1>
            <h3>{item.age}</h3>
            <h3>{item.height}</h3>
            </>
        ))}
        </>
    )
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurf,
    }
}

  export default connect(mapStateToProps, {})(Smurfs);
