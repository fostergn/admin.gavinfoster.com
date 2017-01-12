import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import moment from 'moment';

const ConversationCard = ({conversation}) => {
  var messageObject = (typeof conversation.messages != 'undefined') ? conversation.messages[conversation.messages.length-1] : {};
  var message = (typeof messageObject !== "undefined") ? messageObject.message : 'loading messages';
  var author = (typeof messageObject !== "undefined") ? messageObject.author : 'loading author';
  var isConnected = (typeof messageObject !== "undefined") ? conversation.isConnected : '?';
  var conversationId = (typeof messageObject !== "undefined") ? messageObject.conversationId : 'loading';
  var isTyping = (typeof messageObject !== "undefined") ? conversation.isTyping : '?';
  const createdOnTime = new Date(conversation.createdOn).toString('yyyy-MM-dd');
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');

  function navigateToSingle(id){
    browserHistory.push(`/admin/conversations/${id}`);
  }

  const messageClass = classNames({
    'conversation__message': true,
    'conversation__message--typing': false,
  })

  // return (
  //   <div
  //     className="conversation__card"
  //     onClick={()=>navigateToSingle(conversationId)}>
  //     <p>created {moment(createdOnTime).fromNow()}</p>
  //     <p>last: {moment(lastChatTime).fromNow()}</p>
  //     <p>message: {message}</p>
  //     <p>author: {author}</p>
  //     <p>status: {isConnected ? 'connected' : 'offline'}</p>
  //     <p>{isTyping ? 'eddie is typing...' : ''}</p>
  //   </div>
  // );
  return (
    <div className="conversation__container conversation__container--green"
      onClick={()=>navigateToSingle(conversationId)}
      >
      <div className="conversation__header">
        <div className="conversation__icon"></div>
        <div className="conversation__title-container">
          <h2 className="conversation__title">Guy From Tulsa</h2>
          <p className="conversation__detail"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment(lastChatTime).fromNow()}</p>
          <p className="conversation__detail"><i className="fa fa-user" aria-hidden="true"></i> is active</p>
          <p className="conversation__edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></p>
        </div>
      </div>
      <div className="conversation__message-container">
        <div className={messageClass}>Hey Have you used Redux before</div>
      </div>
    </div>
  )
}

export default ConversationCard;
