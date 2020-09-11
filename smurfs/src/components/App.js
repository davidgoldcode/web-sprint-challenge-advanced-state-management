import React, { useEffect } from "react";
import "./App.css";
import fetchSmurfs from '../store/actions/fetchSmurfActions'
import { connect } from 'react-redux';
import AddSmurf from "./AddSmurf";
import Smurfs from "./Smurfs";

function App({fetchSmurfs, name, age, id, height}) {

    useEffect(() => {
      fetchSmurfs()
    }, [])

    return (
      <div className="App">
        <h1>SMURFS! with Redux</h1>
        <AddSmurf/>
        <Smurfs/>
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      name: state.name,
      age: state.age,
      height: state.height,
      id: state.id,
    }
  }

export default connect(mapStateToProps, { fetchSmurfs })(App);
