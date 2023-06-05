import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/messages/messageSlice';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  const message = useSelector((state) => state.messages.message);

  return (
    <h1>
      { message }
    </h1>
  );
}

export default Greeting;
