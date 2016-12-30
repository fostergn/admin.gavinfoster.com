import React, { Component } from 'react';

class Admin extends Component{
  render(props){
    function submitForm(e){
      e.preventDefault();
      this.props.sendMessage(this.props.messageInputText);
    }

    return (
      <div>
      <p>Welcome to the Admin</p>
      {this.props.children}
      </div>
    );
  }
}

export default Admin;
