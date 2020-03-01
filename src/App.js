import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './reduxstate/updateAction';


function App(props) {
  return (
    <div className="App">
      <p>Name : {props.Names.Name}</p>
      <button onClick={props.addItem}>UpdateName</button>
    </div>
  );
}

const MapStateToProps = (state) => {
  console.log('State from app - ' + JSON.stringify(state));
  return {
    Names: state.Names
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem)
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
