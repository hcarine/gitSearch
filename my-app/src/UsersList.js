import React, { Component } from 'react';
import Modal from 'react-modal';
import './UsersList.css';
import note from './note.svg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
     this.changeModalState = this.changeModalState.bind(this);
     this.seachNote = this.seachNote.bind(this);
     this.closeNote = this.closeNote.bind(this);
  }
  changeModalState(){
     this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  seachNote(){
    var note = localStorage.getItem( this.props.users.id);
    document.querySelector('input[id="userNote"]').value = note
  }
  closeNote(){
    var value = document.querySelector('input[id="userNote"]').value
    localStorage.setItem( this.props.users.id, value);
    this.changeModalState()
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
        <img src={note} className="note" onClick={this.changeModalState}></img>
        <Modal
            isOpen={this.state.modalOpen}
            onAfterOpen={this.seachNote}
            onRequestClose={this.closeNote}
            closeTimeoutMS={2}
            style={customStyles}
            contentLabel="Modal"
          >
            <h1>Note for the user</h1>
            <input id="userNote" type="text" className="modal-input"/>
            <button onClick={this.closeNote} className="close-btn">Close Modal</button>
          </Modal>
       </div>
        );
  }
}

export default UsersList;