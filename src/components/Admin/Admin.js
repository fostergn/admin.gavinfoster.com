import React, { Component } from 'react';
import { signOut } from '../../firebaseAuth';

const Admin = ({updateText, sendMessage, messageInputText, messages}) => {

    function submitForm(e){
      e.preventDefault();
      sendMessage(messageInputText);
    }

    function logout(e){
      e.preventDefault();
      signOut();
    }

    const messageList = messages.map(msg => <li>{`${msg.author}: ${msg.message}`}</li>);

    return (
      <div>
      <p>Welcome</p>
      <p>messages:</p>
      <ul>
        {messageList}
      </ul>
      <form onSubmit={(e)=>submitForm(e)}>
        <input type="text" value={messageInputText} onChange={e => updateText(e.target.value)} />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={(e) => logout(e)}>Logout</button>
      </div>
    );
}

export default Admin;
