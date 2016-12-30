import React, { Component } from 'react';
import { authenticate } from '../../firebaseAuth';
import { browserHistory } from 'react-router';

class Login extends Component {
  render() {

    function login(){
      authenticate(function(data){
        browserHistory.push('/admin');
      });
    }

    return (
      <button onClick={()=>login()}>Login</button>
    );
  }
}

export default Login;
