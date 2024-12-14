import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTaskForm from './components/AddTaskForm';
import FilterDropdown from './components/FilterDropdown';
import SearchBar from './components/SearchBar';
import TaskCounters from './components/TaskCounters';
import TaskTable from './components/TaskTable';
import './index.css';
import { fetchTasks } from './utils/api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(data);
      setFilteredTasks(data);
    });
  }, []);

  const handleAddTask = (task) => {
    const newTask = { ...task, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setFilteredTasks(filteredTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (editedTask) => {
    setTasks(tasks.map((task) => (task.id === editedTask.id ? editedTask : task)));
    setFilteredTasks(filteredTasks.map((task) => (task.id === editedTask.id ? editedTask : task)));
  };

  const handleFilter = (status) => {
    setFilteredTasks(tasks.filter((task) => !status || task.status === status));
  };

  const handleSearch = (query) => {
    setFilteredTasks(
      tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(query.toLowerCase()) ||
          task.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={handleAddTask} />
      <SearchBar onSearch={handleSearch} />
      <FilterDropdown onFilter={handleFilter} />
      <TaskCounters tasks={tasks} />
      <TaskTable tasks={filteredTasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
      <ToastContainer />
    </div>
  );
};

export default App;
