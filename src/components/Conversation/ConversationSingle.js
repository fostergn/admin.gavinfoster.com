import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const ConversationSingle = ({params, conversations, messageInputText, sendMessage, updateText}) => {
  const conversationId = params.id;
  let messagesList = '';
  if(typeof conversations !== "undefined"){
    const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
    const conversation = conversations[conversationPos];
    if(typeof conversation !== "undefined"){
      messagesList = conversation.messages
          .map((message, index) => <li className={`chat-message chat-message--${message.author}`} key={index}>{message.message}</li>);
    }
  }

  function formSubmit(e){
    e.preventDefault();
    sendMessage(messageInputText, 'admin', conversationId);
  }

  function updateMessageInputText(text){
    updateText(text)
  }

  return (
    <div className="main--sidebar">
      <div className="sidebar__container">
        <ul>
          <li className="sidebar-conversation__item">
            <div className="sidebar-conversation__image"></div>
            <div className="sidebar-conversation__content">
              <div className="sidebar-conversation__header">
                <div className="sidebar-conversation__title">Guy From Tulsa</div>
                <div className="sidebar-conversation__time">2 days</div>
              </div>
              <div className="sidebar-conversation__message">Hey have you used Redux bef...</div>
            </div>
          </li>
          <li className="sidebar-conversation__item sidebar-conversation__item--green">
            <div className="sidebar-conversation__image"></div>
            <div className="sidebar-conversation__content">
              <div className="sidebar-conversation__header">
                <div className="sidebar-conversation__title">Guy From Tulsa</div>
                <div className="sidebar-conversation__time">2 days</div>
              </div>
              <div className="sidebar-conversation__message">Hey have you used Redux bef...</div>
            </div>
          </li>
          <li className="sidebar-conversation__item">
            <div className="sidebar-conversation__image"></div>
            <div className="sidebar-conversation__content">
              <div className="sidebar-conversation__header">
                <div className="sidebar-conversation__title">Guy From Tulsa</div>
                <div className="sidebar-conversation__time">2 days</div>
              </div>
              <div className="sidebar-conversation__message">Hey have you used Redux bef...</div>
            </div>
          </li>
          <li className="sidebar-conversation__item sidebar-conversation__item--green  sidebar-conversation__item--active">
            <div className="sidebar-conversation__image"></div>
            <div className="sidebar-conversation__content">
              <div className="sidebar-conversation__header">
                <div className="sidebar-conversation__title">Lil Scrape from Hanoi</div>
                <div className="sidebar-conversation__time">2 days</div>
              </div>
              <div className="sidebar-conversation__message">Hey have you used Redux bef...</div>
            </div>
          </li>
          <li className="sidebar-conversation__item">
            <div className="sidebar-conversation__image"></div>
            <div className="sidebar-conversation__content">
              <div className="sidebar-conversation__header">
                <div className="sidebar-conversation__title">Guy From Tulsa</div>
                <div className="sidebar-conversation__time">2 days</div>
              </div>
              <div className="sidebar-conversation__message">Hey have you used Redux bef...</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat-message__container">
        <header className="chat-message__header">
          <h2>Lil Scrape from Hanoi</h2>
        </header>
        <ul className="chat-message__messages chat-message__messages--wide">
          {messagesList}
        </ul>
        <form className="chat-form">
          <div className="chat-form__input">
            <pre><span className="chat-form__span"></span><br /></pre>
            <div contentEditable="true" id="chat-form__textarea" placeholder="Message Client"></div>
          </div>
          <div className="chat-form__submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></div>
        </form>
      </div>
    </div>
  );
}

export default ConversationSingle;
