import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [tasks, setTasks] = useState([
    'Buy groceries',
    'Finish React project',
    'Read a book',
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <Body tasks={tasks} addTask={addTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
