import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleMessage,
  selectSingleMessage,
  deleteSingleMessage,
  clearSingleMessage,
} from '../store/singleMessageSlice';

export default function SingleMessage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleMessage(id));
  }, [dispatch, id]);

  const message = useSelector(selectSingleMessage);

  async function handleDelete(event) {
    event.preventDefault();

    await dispatch(clearSingleMessage);
    await dispatch(deleteSingleMessage(id));

    navigate('/messages');
  }

  return (
    <div className="single-message-wrapper">
      {message.id !== undefined ? (
        <>
          <h2>{message.title}</h2>
          <p onClick={handleDelete}>(Delete)</p>
          <small>By: {message.driver.name}</small>
          <article>{message.content}</article>
        </>
      ) : null}
    </div>
  );
}
