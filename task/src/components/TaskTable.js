import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskTable = ({ tasks, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editTask, setEditTask] = useState(null);

  const handleEditClick = (task) => {
    setIsEditing(task.id);
    setEditTask({ ...task });
  };

  const handleEditSave = () => {
    onEdit(editTask);
    toast.success('Task edited successfully!');
    setIsEditing(null);
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>
              {isEditing === task.id ? (
                <input
                  type="text"
                  value={editTask.title}
                  onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                />
              ) : (
                task.title
              )}
            </td>
            <td>
              {isEditing === task.id ? (
                <textarea
                  value={editTask.description}
                  onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                />
              ) : (
                task.description
              )}
            </td>
            <td>
              {isEditing === task.id ? (
                <select
                  value={editTask.status}
                  onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              ) : (
                task.status
              )}
            </td>
            <td>
              {isEditing === task.id ? (
                <button onClick={handleEditSave}>Save</button>
              ) : (
                <>
                  <button className="delete-btn" onClick={() => onDelete(task.id)}>
                    Delete
                  </button>
                  <button className="edit-btn" onClick={() => handleEditClick(task)}>
                    Edit
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;


