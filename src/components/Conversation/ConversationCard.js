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
  var clientIsTyping = (typeof messageObject !== "undefined") ? conversation.clientIsTyping : false;
  var name = (typeof messageObject !== "undefined") ? conversation.name : '?';

  const createdOnTime = new Date(conversation.createdOn).toString('yyyy-MM-dd');
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');

  function navigateToSingle(id){
    browserHistory.push(`/admin/conversations/${id}`);
  }

  const cardClass = classNames({
    'conversation__message': true,
    'conversation__message--typing': clientIsTyping,
  })
  if(conversation.name=="Timothy French"){
  console.log('conversation card: ', cardClass);
  console.log('conversation isClientTyping: ', clientIsTyping);
  console.log('conversation conversation: ', conversation);
  }

  const connectedIconClass = classNames({
    'fa': true,
    'fa-user': true,
    'fa-user-o': !isConnected,
  })

  let messageContent = message.startsWith('data:') ? <img src={message} /> : message ;
  messageContent = messageContent.length > 40 ? `${messageContent.slice(0, 37)}...` : messageContent

  return (
    <div className={`conversation__container conversation__container--${conversation.identity}`}
      onClick={()=>navigateToSingle(conversationId)}
      >
      <div className="conversation__header">
        <div className="conversation__icon"></div>
        <div className="conversation__title-container">
          <h2 className="conversation__title">{name}</h2>
          <p className="conversation__detail"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment(lastChatTime).fromNow()}</p>
          <p className="conversation__detail"><i className={connectedIconClass} aria-hidden="true"></i> {isConnected ? ' is connected' : ' offline'}</p>
          {/* TODO: edit feature <p className="conversation__edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></p>*/}
        </div>
      </div>
      <div className="conversation__message-container">
        <div className={cardClass}>{messageContent}</div>
      </div>
    </div>
  )
}

export default ConversationCard;
