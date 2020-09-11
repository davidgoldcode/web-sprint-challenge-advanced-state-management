import React, { useEffect } from "react";
import "./App.css";
import fetchSmurfs from '../store/actions/fetchSmurfActions'
import { connect } from 'react-redux';
import AddSmurf from "./AddSmurf";
import Smurfs from "./Smurfs";

function App({fetchSmurfs}) {

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


export default connect(null, { fetchSmurfs })(App);
