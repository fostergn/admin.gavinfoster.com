import React, { Component } from 'react';

class ConversationSingleList extends Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.updateScrollPosition();
  }

  componentDidUpdate(){
    this.updateScrollPosition();
    console.log('setting scroll position');
  }

  updateScrollPosition(){
    const scrollableList = document.getElementsByClassName('chat-message__messages--wide');
    if(scrollableList[0]){
      scrollableList[0].scrollTop = scrollableList[0].scrollHeight + 30;
    }
    console.log('updating scroll position: ', scrollableList[0].scrollHeight + 30);
  }

  imageNewWindow(url){
    var win = window.open(url, '_blank');
    win.focus();
  }

  render(){
    let {params, conversations} = this.props;
    const conversationId = params.id;
    let messagesList = '';
    if(typeof conversations !== "undefined"){
      const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
      const conversation = conversations[conversationPos];
      if(typeof conversation !== "undefined"){
        messagesList = conversation.messages
            .map((msg, index) => {
              if (msg.message.startsWith('data:')){
                return (<li key={index} className={`chat-message chat-message--image chat-message--${msg.author}`}><img className="chat-message__image" onDoubleClick={() => this.imageNewWindow(msg.message)} src={msg.message} /></li>)
              }
              return (<li key={index} className={`chat-message chat-message--${msg.author}`}>{msg.message}</li>)
            });
      }
    }

    return (
      <ul className="chat-message__messages chat-message__messages--wide">
        {messagesList}
      </ul>
    );
  }
}

export default ConversationSingleList;
