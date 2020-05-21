import React from 'react';
import './App.css';
// import TabMenu from './Components/TabMenu';
// import Header from './Components/Header';
// import LoginForm from './Components/LoginForm';
// import RecommendedFriends from './Components/RecommendedFriends';
import Table from './Components/Table';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table data={[
          {first: 'Mark', last: 'Otton', handle: '@mdo'},
          {first: 'Jacob', last: 'Thornton', handle: '@fat'},
          {first: 'Mark', last: 'Otton', handle: '@mdo'}
        ]} />
      </div>
    )
  }
}

export default App;
