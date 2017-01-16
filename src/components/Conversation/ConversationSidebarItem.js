import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const ConversationSidebarItem = ({ conversation }) => {

  // <li className="sidebar-conversation__item sidebar-conversation__item--green  sidebar-conversation__item--active">
  //   <div className="sidebar-conversation__image"></div>
  //   <div className="sidebar-conversation__content">
  //     <div className="sidebar-conversation__header">
  //       <div className="sidebar-conversation__title">Lil Scrape from Hanoi</div>
  //       <div className="sidebar-conversation__time">2 days</div>
  //     </div>
  //     <div className="sidebar-conversation__message">Hey have you used Redux bef...</div>
  //   </div>
  // </li>

  console.log('conversation: ', conversation.messages);
  console.log('last message: ', conversation.messages[conversation.messages.length - 1]);

  let messageText = (typeof conversation.messages[conversation.messages.length - 1] !== 'undefined') ? conversation.messages[conversation.messages.length - 1].message : 'Loading';
  messageText = messageText.startsWith('data:') ? 'Sent an image' : messageText;

  function navigateToSingle(id){
    browserHistory.push(`/admin/conversations/${id}`);
  }

  return (
      <li className="sidebar-conversation__item" onClick={() => navigateToSingle(conversation.conversationId)}>
        <div className="sidebar-conversation__image"></div>
        <div className="sidebar-conversation__content">
          <div className="sidebar-conversation__header">
            <div className="sidebar-conversation__title">Guy From Tulsa</div>
            <div className="sidebar-conversation__time">2 days</div>
          </div>
          <div className="sidebar-conversation__message">{messageText}</div>
        </div>
      </li>
  );
}

export default ConversationSidebarItem;
