import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationCard from './ConversationCard';

const ConversationList = ({conversations}) => {

  const messageList = conversations
    .map(conversation => <ConversationCard conversation={conversation}/>);

  return (
    <div>
      {messageList}
    </div>
  );
}

export default ConversationList;
