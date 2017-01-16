import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationSidebar from './ConversationSidebar';
import ConversationSingleForm from './ConversationSingleForm';
import ConversationSingleHeader from './ConversationSingleHeader';

const ConversationSingle = ({params, conversations, messageInputText, sendMessage, updateText}) => {
  const conversationId = params.id;
  let messagesList = '';
  if(typeof conversations !== "undefined"){
    const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
    const conversation = conversations[conversationPos];
    if(typeof conversation !== "undefined"){
      messagesList = conversation.messages
          .map((msg, index) => {
            if (msg.message.startsWith('data:')){
              return (<li key={index} className={`chat-message chat-message--image chat-message--${msg.author}`}><img className="chat-message__image" onDoubleClick={() => imageNewWindow(msg.message)} src={msg.message} /></li>)
            }
            return (<li key={index} className={`chat-message chat-message--${msg.author}`}>{msg.message}</li>)
          });
    }
  }

  function imageNewWindow(url){
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div className="main--sidebar">
      <ConversationSidebar />
      <div className="chat-message__container">
        <ConversationSingleHeader />
        <ul className="chat-message__messages chat-message__messages--wide">
          {messagesList}
        </ul>
        <ConversationSingleForm sendMessage={sendMessage} conversationId={conversationId} />
      </div>
    </div>
  );
}

export default ConversationSingle;
