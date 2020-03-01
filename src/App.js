import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './reduxstate/updateAction';
import { fetchusers } from './reduxstate/fetchUsers';


function App(props) {
  return (
    <div className="App">
      <p>Name : {props.Names.Name}</p>
      <button onClick={props.addItem}>UpdateName</button>
      <p></p>
      <div><br />
        {props.Users.length === 0 ?
          <p>THERE ARE NO USERS</p> :
          props.Users.map(user => <p key={user.id}><img src={user.avatar} alt={user.first_name} />{user.first_name} -    {user.email}</p>)}
        <br />
        <button onClick={props.fetchusers}>FETCH USERS</button>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => {
  console.log('State from app - ' + JSON.stringify(state));
  return {
    Names: state.Names,
    Users: state.Users
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem),
    fetchusers: () => dispatch(fetchusers)
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
