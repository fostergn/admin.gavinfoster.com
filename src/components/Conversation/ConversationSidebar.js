import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationSidebarItem from './ConversationSidebarItem';

const ConversationSidebar = ({ conversations, conversationId }) => {

  const conversationSidebarItemList = conversations.map((convo, index) => <ConversationSidebarItem key={index} conversation={convo} paramsConversationId={conversationId} />)

  return (
      <div className="sidebar__container">
        <ul>
            {conversationSidebarItemList}
        </ul>
      </div>
  );
}

export default ConversationSidebar;
