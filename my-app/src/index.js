import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchUser from './SearchUser';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<SearchUser />, document.getElementById('searchUser'));
