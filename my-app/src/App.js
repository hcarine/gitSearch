import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchUser from './SearchUser';
import UsersList from './UsersList';
import RepositoriesList from './RepositoriesList';
import {searchRepositories} from './Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      repositories: null
    }
    this.updateList = this.updateList.bind(this)
    this.udateRepositories = this.udateRepositories.bind(this);
  }

  updateList(users){
    searchRepositories( users.login, this.udateRepositories)
    this.setState({
      users
    })
  }
  udateRepositories(repositories){
    this.setState({
      repositories
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
          {this.state.repositories ? (
             <RepositoriesList repositories={this.state.repositories}/>
            ): null
          }
      </div>
    );
  }
}

export default App;
