import React from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
  'Go to market',
  'Buy food',
  'Make dinner'
];

function App() {
  const todoElements = todos.map(element => {
    return <li>{element}</li>;
  })
  return (
    <ul>
      {todoElements}
    </ul>
  );
}

export default App;
