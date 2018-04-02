import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };

    this.onChange = this.onChange.bind(this);
    this.afterLogin = this.afterLogin.bind(this);
  }

  onChange(e) {
    this.setState({
      user: e.target.value
    })
  }

  afterLogin() {
    this.setState({
      user: ''
    })
  }

  render() {
    return (
      <div>
        <h4> Welcome, {this.props.username} </h4>
        <div className="login-container">
          <label><b>Username: </b></label>
          <input 
            type = "text" 
            placeholder = "Enter Username"
            value = { this.state.user }
            onChange =  { this.onChange }
          />
          <button
            onClick = {() => this.props.login(this.state.user) }
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

// Create function to display username once someone clicked the button

export default Login;