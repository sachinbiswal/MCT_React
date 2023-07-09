import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import UserList from './Components/UserList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
};

export default App;
