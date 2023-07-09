import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  EDIT_USER,
  TOGGLE_LIKE,
  DELETE_USER
} from '../ActionTypes/actionTypes';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user
  };
};


export const toggleLike = (userId) => ({
  type: TOGGLE_LIKE,
  payload: userId
});

export const deleteUser = (userId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3030/users/${userId}`)
      .then(() => {
        dispatch({
          type: DELETE_USER,
          payload: userId
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
