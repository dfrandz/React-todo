import React from 'react';
import "./App.css";
import TodoList from "./components/TodoList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    
      <h1 className="container">My Todo App</h1>
      <TodoList />
    </>
  );
}

export default App;
