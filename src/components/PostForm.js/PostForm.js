import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }
  handleChange = (e) => {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    } else {
      this.setState({ body: e.target.value });
    }
  };
  
  addPost = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.title   
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addPost}>
          <div>
            <label name='title'>Post Title</label>
            <input
              onChange={this.handleChange}
              value={this.state.title}
              type='text'
              name='title'
            />
          </div>
          <br />
          <div>
            <label name='body'>Post body</label>
            <textarea
              onChange={this.handleChange}
              value={this.state.body}
              name='body'
            />
          </div>
          <br />
          <button
            className='waves-effect waves-light btn'
            type='submit'
            name='body'
          >
            Add Your Post
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default PostForm;
