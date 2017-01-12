import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationCard from './ConversationCard';

const ConversationList = ({conversations}) => {

  const messageList = conversations
    .map(conversation => <ConversationCard conversation={conversation}/>)
    .sort((a,b) => a.lastChat - b.lastChat)

  return (
    <div className="main--sidebar">
      <div className="sidebar__container">
        <form>
          <div className="search__container">
            <input className="search__input" placeholder="search conversations" />
            <i className="fa fa-search search__icon" aria-hidden="true"></i>
        </div>
        </form>
      </div>
      <div className="conversation__list">
        {messageList}
      </div>
    </div>
  );
}

export default ConversationList;
