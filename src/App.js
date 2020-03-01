import React from 'react';
import './App.css';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className="App">
      <p>{props.Name}</p>

    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    Name: state.Name
  };
};

export default connect(MapStateToProps)(App);
