import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ title: '', description: '', status: 'To Do' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    onAdd(task);
    setTask({ title: '', description: '', status: 'To Do' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
