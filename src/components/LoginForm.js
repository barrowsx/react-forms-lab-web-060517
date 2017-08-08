import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  editUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  editPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  whyWontThisWork = (event) => {
    event.preventDefault()
    debugger
    if(this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.whyWontThisWork}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.editUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.editPassword}/>
          </label>
        </div>
        <div>
          <button type="submit" ></button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
