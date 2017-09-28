import React, { Component } from 'react';
import './RepositoriesList.css';

class RepositoriesList extends Component {
    constructor(props) {
    super(props);
  }

  generateRows(){
    var listRepos = []
    for (var i = 0; i < this.props.repositories.length; i++) {
      var repo = this.props.repositories[i]
      listRepos.push(<List key={repo.id} name={repo.name} description={repo.description} forks={repo.forks} language={repo.language} /> )
    }
    return listRepos
  }

  render() {
    return (
      <div className="repoList">
        <h1>Repo list</h1>
        {this.generateRows()}
      </div>
    );
  }
}

export default RepositoriesList;

class List extends React.Component {

    render() {
      let forks= 'forks ' + this.props.forks
        return(
          <div className="item-inner">
            <h2>{this.props.name}</h2>
            <label className='subtitle'>{this.props.description}</label>
            <div className="legend">
              <label>{forks}</label>
              <label>{this.props.language}</label>
            </div>
        </div>
    )
    }
}