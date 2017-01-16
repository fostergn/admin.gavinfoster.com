import React, { Component } from 'react';

const ConversationSidebar = () => {
  return (
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
  );
}

export default ConversationSidebar;
