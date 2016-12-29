import React, { Component } from 'react';
import db from '../../firebaseDB';

const Admin = ({updateText, sendMessage, message}) => {

    function submitForm(e){
      e.preventDefault();
      sendMessage(message);
    }

    return (
      <div>
      <p>Welcome</p>
      <p>messages:</p>
      <ul>
      </ul>
      <form onSubmit={(e)=>submitForm(e)}>
        <input type="text" value={message} onChange={e => updateText(e.target.value)} />
      </form>
      </div>
    );
}

export default Admin;
