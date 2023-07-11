import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import UserCard from './UserCard';
import './userList.css'
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  deleteUser
} from '../ActionCreator/actionCreator';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const handleDelete = (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      dispatch(deleteUser(userId));
    }
  };
  useEffect(() => {
    dispatch(fetchUsersRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  }, [dispatch]);

  if (loading) {
    return <div>
      <center>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
        <h2 style={{color:'grey'}}>loading please wait...</h2>
      </center>
    </div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;
