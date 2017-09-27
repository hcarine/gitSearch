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
    //debugger
    let value = event.currentTarget.value
    clearTimeout( this.state.timeOut )
    var newTime = setTimeout(function () {
       searchUser( value )

     }, 500)


    this.setState({
      timeOut: newTime
    })
    // console.log(event.currentTarget.value)

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