import React, { useState, useEffect } from 'react';
import { fetchAllDrivers, selectAllDrivers } from '../store/driverSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  createSingleMessage,
  clearSingleMessage,
} from '../store/singleMessageSlice';
import { fetchAllMessages } from '../store/messagesSlice';

export default function CreatePost(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [driver, setDriver] = useState(0);

  useEffect(() => {
    dispatch(fetchAllDrivers());
  }, [dispatch]);

  const drivers = useSelector(selectAllDrivers);

  async function submitHandler(event) {
    event.preventDefault();
    const messagePayload = {
      driverId: driver,
      title: postTitle,
      content: postContent,
    };

    await dispatch(createSingleMessage(messagePayload));
    await dispatch(clearSingleMessage());
    await dispatch(fetchAllMessages());
    setPostTitle('');
    setPostContent('');

    navigate('/messages');
  }

  return (
    <>
      <h1>New Post</h1>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="author">By:</label>
        <select
          name="driverId"
          id="author"
          value={driver}
          onInput={(e) => setDriver(e.target.value)}
        >
          {drivers.length > 0 &&
            drivers.map((driver) => {
              return (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              );
            })}
        </select>
        <label htmlFor="post-content">Your post:</label>
        <textarea
          name="content"
          value={postContent}
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
          id="post-content"
          cols="50"
          rows="15"
        ></textarea>
        <button type="submit">Submit Post</button>
      </form>
      <Link to="/messages">Cancel</Link>
    </>
  );
}
