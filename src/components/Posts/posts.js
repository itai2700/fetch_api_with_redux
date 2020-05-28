import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.handlePosts(data))
      .catch((err) => console.log(err));
  }

  handlePosts = (data) => {
    let posts = [];
    data.map((post) => posts.push(post));
    this.setState({
      posts,
    });
  };

  postsList = () => {
    const posts = this.state.posts;
    const postsList = posts.map((post) => {
      return (
        <li key={post.id} className='collection-item'>
          <h5>
            {post.id}
            <span>{'. '}</span>
            {post.title}
          </h5>
          <p>{post.body}</p>
        </li>
      );
    });
    return postsList.length ? postsList : <h1>Loading Data...</h1>;
  };
  
  render() {
    return (
      <div>
        <ul className='collection'>
          <div>{this.postsList()}</div>
        </ul>
      </div>
    );
  }
}

export default Posts;
