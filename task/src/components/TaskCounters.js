import React from 'react';

const TaskCounters = ({ tasks }) => {
  const counts = {
    'To Do': tasks.filter((task) => task.status === 'To Do').length,
    'In Progress': tasks.filter((task) => task.status === 'In Progress').length,
    Done: tasks.filter((task) => task.status === 'Done').length,
  };

  return (
    <div className="counters">
      <div>To Do: {counts['To Do']}</div>
      <div>In Progress: {counts['In Progress']}</div>
      <div>Done: {counts['Done']}</div>
    </div>
  );
};

export default TaskCounters;
