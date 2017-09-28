import React, { Component } from 'react';
import './SearchUser.css';
import {searchUser} from './Api';

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOut:0 
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick( event ){
    var that= this
    let value = event.currentTarget.value
    clearTimeout( this.state.timeOut )
    var newTime = setTimeout(function () {
       searchUser( value, that.props.onChange )
     }, 500)

    this.setState({
      timeOut: newTime
    })
  }
 
  render() {
    var that = this
    return (
      <div className="searchUser">
        <input type="text" className="search" onChange={this.handleClick} placeholder="name or nickName"/>
       </div>
        );
  }
}

export default SearchUser;