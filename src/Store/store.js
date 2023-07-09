import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import myReducer from '../Reducer/myReducer';

const store = createStore(myReducer, applyMiddleware(thunkMiddleware));

export default store;
