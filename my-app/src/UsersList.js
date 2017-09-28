import React, { Component } from 'react';
import './UsersList.css';

class UsersList extends Component {
    constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.users
    let userName = 'Name: ' + user.login
    let userEmail = 'Email: ' + user.email
    let userFollowers = 'followers: ' + user.followers
    let userBio = 'bio: ' + user.bio

    return (
      <div className="usersList">
        <img src={user.avatar_url}/>
        <ul>
          <li>{userName}</li>
          <li>{userEmail}</li>
          <li>{userFollowers}</li>
          <li>{userBio}</li>
        </ul>
       </div>
        );
  }
}

export default UsersList;