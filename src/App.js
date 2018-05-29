import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      active: false
    }
  }

  handleClick = () => {
    fetch('https://api.github.com/users/cjbruin23')
      .then(res => res.json())
      .then(data => {
        if (this.state.active) {
          this.setState({
            user: data,
            active: false
          })
        } else {
          this.setState({
            user: data,
            active: true
          })
        }  
    })
}

  render() {
    const isActive = this.state.active;

    const userInformation = isActive ? (
      <React.Fragment>
        <div class="container">
          <div class="flex-item">
            <img src={this.state.user.avatar_url} alt='User Profile Image'></img>
          </div>
          <div class="flex-item" id="user-information">
            <p><strong>Username</strong>: {this.state.user.login}</p>
            <p><strong>Followers</strong>: {this.state.user.followers}</p>
            <p><strong>URL</strong>: {this.state.user.url}</p>
          </div>
        </div>
      </React.Fragment>

    ) : (
      <div></div>
    )

    return (
      <div>
        <button onClick={this.handleClick}>
          Get Information
        </button>
        {userInformation} 
      </div>
     
    );
  }
}

export default App;
