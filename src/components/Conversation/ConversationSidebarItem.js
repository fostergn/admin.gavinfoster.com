import React, { Component } from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import moment from 'moment';

const ConversationSidebarItem = ({conversation, paramsConversationId}) => {

  let messageText = (typeof conversation.messages[conversation.messages.length - 1] !== 'undefined') ? conversation.messages[conversation.messages.length - 1].message : 'Loading';
  let lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');
  lastChatTime = moment(lastChatTime).fromNow();
  messageText = messageText.startsWith('data:') ? 'Sent an image' : messageText;
  messageText = messageText.length > 40 ? `${messageText.slice(0, 37)}...` : messageText

  function navigateToSingle(id){
    browserHistory.push(`/admin/conversations/${id}`);
  }

  const conversationClass = classNames({
    "sidebar-conversation__item": true,
    [`sidebar-conversation__item--${conversation.identity}`]: true,
    "sidebar-conversation__item--active": conversation.conversationId === paramsConversationId,
  })

  const imageClass= classNames({
    'sidebar-conversation__image': true
  })

  return (
      <li className={conversationClass} onClick={() => navigateToSingle(conversation.conversationId)}>
        <div className={imageClass}></div>
        <div className="sidebar-conversation__content">
          <div className="sidebar-conversation__header">
            <div className="sidebar-conversation__title">{conversation.name}</div>
            <div className="sidebar-conversation__time">{lastChatTime}</div>
          </div>
          <div className="sidebar-conversation__message">{messageText}</div>
        </div>
      </li>
  );
}

export default ConversationSidebarItem;
