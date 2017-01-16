import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const ConversationSingleForm = ({sendMessage, conversationId}) => {
  function handleTyping(e) {
      const keyCode = e.keyCode;
      if (keyCode == 13 && e.shiftKey) {
      } else if (keyCode == 13) {
        const inputElement = document.getElementById('chat-form__textarea');
        submitForm();
        inputElement.innerHTML = '';
        document.getElementsByClassName('chat-form__span')[0].innerHTML = '';
        e.preventDefault();
      }
  }

  function submitForm(){
    const textarea = document.getElementById('chat-form__textarea');
    sendMessage(textarea.innerText, 'admin', conversationId);
    textarea.innerHTML = '';
  }

  return (
    <form className="chat-form">
      <div className="chat-form__input">
        <pre><span className="chat-form__span"></span><br /></pre>
        <div
          contentEditable="true"
          id="chat-form__textarea"
          placeholder="Message Client"
          onKeyDown={(e) => handleTyping(e)}
        ></div>
      </div>
      <div className="chat-form__submit" onClick={() => submitForm()}><i className="fa fa-paper-plane-o" aria-hidden="true"></i></div>
    </form>
  );
}

export default ConversationSingleForm;
