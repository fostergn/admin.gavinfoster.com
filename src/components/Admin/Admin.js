import React, { Component } from 'react';
import { signOut } from '../../firebaseAuth';

const Admin = ({updateText, sendMessage, messageInputText, conversations}) => {

    function submitForm(e){
      e.preventDefault();
      sendMessage(messageInputText);
    }

    function logout(e){
      e.preventDefault();
      signOut();
    }

    const messageList = conversations
      .map(conversation => {
        return <ul>{conversation.conversationId}{conversation.messages
        .map(message => <li>{message.message}</li>)}</ul>
      });

    return (
      <div>
      <p>Welcome</p>
      <p>messages:</p>
        {messageList}
      {/*
        <form onSubmit={(e)=>submitForm(e)}>
          <input type="text" value={messageInputText} onChange={e => updateText(e.target.value)} />
        </form>
        */}
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
