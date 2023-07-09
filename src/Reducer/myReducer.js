import { 
    DELETE_USER, 
    EDIT_USER, 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    TOGGLE_LIKE 
} from "../ActionTypes/actionTypes";

  const initialState = {
    users: [],
    loading: false,
    error: null
  };
  
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST :
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case EDIT_USER:
        const updatedUsers = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload
            };
          }
          return user;
        });
        return {
          ...state,
          users: updatedUsers
        };
      case TOGGLE_LIKE:
        const toggledUsers = state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              liked: !user.liked
            };
          }
          return user;
        });
        return {
          ...state,
          users: toggledUsers
        };
      case DELETE_USER:
        const filteredUsers = state.users.filter(
          (user) => user.id !== action.payload
        );
        return {
          ...state,
          users: filteredUsers
        };
      default:
        return state;
    }
  };
  
  export default myReducer;
  