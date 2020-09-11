import React, { useEffect } from "react";
import "./App.css";
import fetchSmurfs from '../store/actions/fetchSmurfActions'
import { connect } from 'react-redux';

function App({fetchSmurfs, name, age, id, height}) {

    useEffect(() => {
      fetchSmurfs()
    }, [])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
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
