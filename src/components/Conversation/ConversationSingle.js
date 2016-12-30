import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const ConversationSingle = ({params, conversations, messageInputText, sendMessage, updateText}) => {
  const conversationId = params.id;
  let messagesList = '';
  if(typeof conversations !== "undefined"){
    const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
    const conversation = conversations[conversationPos];
    if(typeof conversation !== "undefined"){
      messagesList = conversation.messages
          .map((message, index) => <li key={index}>({message.author}) {message.message}</li>);
    }
  }

  function formSubmit(e){
    e.preventDefault();
    sendMessage(messageInputText, 'gavin', conversationId);
  }

  function updateMessageInputText(text){
    updateText(text)
  }

  return (
    <div>
      messages:
      <ul style={{width:'40%', border: '2px solid black', backgroundColor: 'white', margin:'6px', color:'black', padding:'4px'}}>
        {messagesList}
      </ul>
      <form onSubmit={(e) => formSubmit(e)}>
        <input onChange={(e) => updateMessageInputText(e.target.value)} />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p onClick={() => browserHistory.push('/admin/conversations')}>back to conversations</p>
    </div>
  );
}

export default ConversationSingle;
