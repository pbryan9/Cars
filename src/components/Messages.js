import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllMessages, selectAllMessages } from '../store/messagesSlice';

export default function Messages(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMessages());
  }, [dispatch]);

  const messages = useSelector(selectAllMessages);

  return (
    <div className="messages-container">
      {messages &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message.id} className="message-wrapper">
              <div className="message-title">
                <Link to={`/messages/${message.id}`}>{message.title}</Link>
              </div>
              <div className="message-author">{message.driver.name}</div>
            </div>
          );
        })}
    </div>
  );
}
