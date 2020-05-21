import React from 'react';
import './App.css';
// import TabMenu from './Components/TabMenu';
// import Header from './Components/Header';
// import LoginForm from './Components/LoginForm';
// import RecommendedFriends from './Components/RecommendedFriends';
// import Table from './Components/Table';
import Notification from './Components/Notification';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Notification hasUnread={true}/>
      </div>
    )
  }
}

export default App;
