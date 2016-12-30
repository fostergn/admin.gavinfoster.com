import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const ConversationCard = ({conversation}) => {
  var messageObject = conversation.messages[conversation.messages.length-1];
  var message = (typeof messageObject !== "undefined") ? messageObject.message : 'loading messages';
  var author = (typeof messageObject !== "undefined") ? messageObject.author : 'loading author';
  var isConnected = (typeof messageObject !== "undefined") ? conversation.isConnected : '?';
  var conversationId = (typeof messageObject !== "undefined") ? messageObject.conversationId : 'loading';
  var isTyping = (typeof messageObject !== "undefined") ? conversation.isTyping : '?';
  const createdOnTime = new Date(conversation.createdOn).toString('yyyy-MM-dd');
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');

  console.log('isTyping: ', isTyping);

  function navigateToSingle(id){
    browserHistory.push(`/admin/conversations/${id}`);
  }

  return (
    <div onClick={()=>navigateToSingle(conversationId)} style={{width:'40%', display:'inline-block', border: '2px solid black', backgroundColor: 'lightBlue', margin:'6px', color:'black', padding:'4px'}}>
      <p>created {createdOnTime}</p>
      <p>last: {lastChatTime}</p>
      <p>message: {message}</p>
      <p>author: {author}</p>
      <p>status: {isConnected ? 'connected' : 'offline'}</p>
      <p>{isTyping ? 'eddie is typing...' : ''}</p>
    </div>
  );
}

export default ConversationCard;
