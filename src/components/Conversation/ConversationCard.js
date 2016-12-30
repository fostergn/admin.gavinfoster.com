import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const ConversationCard = ({conversation}) => {
  var messageObject = conversation.messages[0];
  var message = (typeof messageObject !== "undefined") ? messageObject.message : 'loading messages';
  var author = (typeof messageObject !== "undefined") ? messageObject.author : 'loading author';
  var conversationId = (typeof messageObject !== "undefined") ? messageObject.conversationId : 'loading';
  const createdOnTime = new Date(conversation.createdOn).toString('yyyy-MM-dd');
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');

  function navigateToSingle(id){
    browserHistory.push(`/admin/${id}`);
  }

  return (
    <div onClick={()=>navigateToSingle(conversationId)} style={{width:'40%', display:'inline-block', border: '2px solid black', backgroundColor: 'lightBlue', margin:'6px', color:'black', padding:'4px'}}>
      <p>created {createdOnTime}</p>
      <p>last: {lastChatTime}</p>
      <p>message: {message}</p>
      <p>author: {author}</p>
    </div>
  );
}

export default ConversationCard;
