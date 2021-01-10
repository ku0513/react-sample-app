import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [id, setId] = useState<Number>(0);
  const [name, setName] = useState<string>('');

  const handleClick = async () => {
    try {
      const result = await axios.get('http://localhost:8080/list');
      setId(result.data.id);
      setName(result.data.name);
    } catch {
      console.log('error')
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button data-test="list-button" onClick={handleClick}>list</button>
      <p data-test="id-text">id:{id}</p>
      <p data-test="name-text">name:{name}</p>
    </div>
  );
}

export default App;
