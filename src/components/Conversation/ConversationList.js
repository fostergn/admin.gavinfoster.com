import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ConversationCard from './ConversationCard';

const ConversationList = ({conversations, searchText, updateSearchText}) => {

  function filterName(conversation){
    return conversation.name.toLowerCase().includes(searchText.toLowerCase());
  }

  // const hasMessages = checkNested(conversations, 0, 'messages', 0, 'message');

  function handleInputChange(input){
    updateSearchText(input);
  }

  const messageList = conversations
    .filter(filterName)
    .map((conversation, index) => <ConversationCard key={index} conversation={conversation}/>)
    .sort((a,b) => a.lastChat - b.lastChat)

  return (
    <div className="main--sidebar">
      <div className="sidebar__container">
        <form>
          <div className="search__container">
            <input className="search__input" onChange={e => handleInputChange(e.target.value)} value={searchText} placeholder="search conversations" />
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

function checkNested(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

export default ConversationList;
