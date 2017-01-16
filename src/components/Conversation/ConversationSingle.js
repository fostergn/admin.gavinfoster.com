import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationSidebar from './ConversationSidebarContainer';
import ConversationSingleForm from './ConversationSingleForm';
import ConversationSingleHeader from './ConversationSingleHeader';
import ConversationSingleList from './ConversationSingleList';

const ConversationSingle = ({params, conversations, messageInputText, sendMessage, updateText}) => {
  const conversationId = params.id;

  return (
    <div className="main--sidebar">
      <ConversationSidebar />
      <div className="chat-message__container">
        <ConversationSingleHeader />
        <ConversationSingleList params={params} conversations={conversations} />
        <ConversationSingleForm sendMessage={sendMessage} conversationId={conversationId} />
      </div>
    </div>
  );
}

export default ConversationSingle;
