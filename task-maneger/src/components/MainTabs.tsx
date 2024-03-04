import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskPanel from './TaskPanel';
import LoadingSpinner from './LoadingSpinner';
import { Tabs, Tab, Paper } from '@mui/material';
import { Task } from './types';
import '../App.css';

const MainTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddTask = (newTask: { title: string; description: string }) => {
    setLoading(true);
    setTimeout(() => {
      setTasks([...tasks, { ...newTask, id: Math.random().toString(), completed: false }]);
      setLoading(false);
    }, 1000);
  };
  

  const handleDeleteTask = (taskId: string) => {
    setLoading(true);
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== taskId));
      setLoading(false);
    }, 1000);
  };

  const handleToggleCompletion = (taskId: string) => {
    setLoading(true);
    setTimeout(() => {
      setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
      setLoading(false);
    }, 1000);
  };

  const handleTabChange = (newValue: number) => {
    setLoading(true); 
    setValue(newValue);
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  };

  return (
    <Paper elevation={3} className="vertical-tabs-container">
      <Tabs 
        value={value}
        onChange={(_, newValue) => handleTabChange(newValue)}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
       <Tab label="Active Tasks" className="tab-label" />
       <Tab label="Completed" className="tab-label" />
      </Tabs>
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          {value === 0 && (
            <>
              <TaskForm addTask={handleAddTask}/>
              <TaskPanel
                loading={loading}
                tasks={tasks.filter((task) => !task.completed)}
                handleDeleteTask={handleDeleteTask}
                handleToggleCompletion={handleToggleCompletion}
              />
            </>
          )}
          {value === 1 && (
            <TaskPanel
              loading={loading}
              tasks={tasks.filter((task) => task.completed)}
              handleDeleteTask={handleDeleteTask}
              handleToggleCompletion={handleToggleCompletion}
            />
          )}
        </>
      )}
    </Paper>
  );
};

export default MainTabs;







