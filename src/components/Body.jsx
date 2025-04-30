import React, { useState } from 'react';

function Body({ tasks, addTask, removeTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
