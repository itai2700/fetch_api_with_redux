import React, { Component } from 'react';
import Posts from '../Posts/posts';
import PostForm from '../PostForm.js/PostForm';
import { Provider } from 'react-redux';
import store from '../Redux/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <h1>Posts</h1>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
