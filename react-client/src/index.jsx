import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Board from './components/Board.jsx';
import Post from './components/Post.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'anonymous',
      list: [],
      count: 0,
      ban: [],
    }
  }

  componentDidMount() {
    this.fetch();
    this.count();
  }

  fetch(ban) {
    $.ajax({
      url: '/ban',
      method: 'POST', 
      contentType: 'application/json',
      data: JSON.stringify(this.state.ban),
      success: (data) => {
        this.count();

        this.setState({
          list: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  count() {
    $.ajax({
      url: '/count',
      success: (data) => {
        this.setState({
          count: parseInt(data)
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  login(user) {
    this.setState({
      username: user
    })
  }

  post(posting) {
    let sendObj = {
      postid: this.state.count,
      username: this.state.username,
      time: 'Mon Sep 25 2017 02:48:36 GMT-0700 (PDT)',
      post: posting,
    }

    $.ajax({
      url: '/posts',
      method: 'POST', 
      contentType: 'application/json',
      data: JSON.stringify(sendObj),
      success: (data) => {
        console.log('sent');
        this.fetch();
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  ban(banList) {
    let arr = this.state.ban;
    let toggle = false;

    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === banList) {
        return toggle = true;
      }
    }

    if(!toggle) {
      arr.push(banList)
    }

    this.setState({
      ban: arr
    })

    this.fetch(arr);
  }

  render () {
    return (<div>
      <h1>Welcome to Free Chat</h1>
      <div className="top-container"> 
        <Login 
          username={ this.state.username }
          login = { this.login.bind(this) }
        />
      </div>

      <hr />

      <div className="bottom-container"> 
        <Post 
          post = { this.post.bind(this) }
        />
      </div>
      <div className="middle-container"> 
        <Board 
          lists= { this.state.list }
          ban = { this.ban.bind(this) }
        />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));