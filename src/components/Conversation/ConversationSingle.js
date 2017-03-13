import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationSidebar from './ConversationSidebarContainer';
import ConversationSingleForm from './ConversationSingleForm';
import ConversationSingleList from './ConversationSingleList';

const ConversationSingle = ({params, conversations, messageInputText, sendMessage, updateText, updateIsTyping}) => {
  const conversationId = params.id;

  return (
    <div className="main--sidebar">
      <ConversationSidebar conversationId={conversationId} />
      <div className="chat-message__container">
        <ConversationSingleList params={params} conversations={conversations} />
        <ConversationSingleForm sendMessage={sendMessage} conversationId={conversationId} updateIsTyping={updateIsTyping} />
      </div>
    </div>
  );
}

export default ConversationSingle;
