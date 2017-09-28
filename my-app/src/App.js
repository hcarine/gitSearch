import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchUser from './SearchUser';
import UsersList from './UsersList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
    this.updateList = this.updateList.bind(this);
  }

  updateList(users){
    this.setState({
      users
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Git search</h1>
        </header>
        <SearchUser onChange={this.updateList}/>
         {this.state.users ? (
             <UsersList users={this.state.users}/>
            ): null
          }
      </div>
    );
  }
}

export default App;
