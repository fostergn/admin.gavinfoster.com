import React, { Component } from 'react';

class Admin extends Component{
  render(props){
    function submitForm(e){
      e.preventDefault();
      this.props.sendMessage(this.props.messageInputText);
    }

    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

export default Admin;
