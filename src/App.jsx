import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      setToDoList([...toDoList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <h1>Yapılacaklar </h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Yapılacak işi girin"
        />
        <button onClick={handleAddClick}>Ekle</button>
      </div>
      <div className="todo-list">
        {toDoList.map((item, index) => (
          <ToDoItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
}

export default App;