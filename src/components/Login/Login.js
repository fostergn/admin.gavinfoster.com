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
      <div className="login" onClick={() => login()}>
        <span className="login__light">
          Sign in with</span> <span className="login__heavy">
            <span className="blue">G</span><span className="red">o</span><span className="yellow">o</span><span className="blue">g</span><span className="green">l</span><span className="red">e</span>
        </span>
      </div>
    );
  }
}

export default Login;
