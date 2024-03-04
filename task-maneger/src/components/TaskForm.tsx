import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../App.css";

interface TaskFormProps {
  addTask: (task: { title: string; description: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <Box
      className="task-form-container"
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        className="task-form-input"
        label="Task Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputLabelProps={{ className: "task-form-label" }}
        InputProps={{ className: "task-form-input" }}
      />
      <TextField
        className="task-form-input"
        label="Task Description"
        variant="outlined"
        value={description}
        multiline
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
        InputLabelProps={{ className: "task-form-label" }}
        InputProps={{ className: "task-form-input" }}
      />
      <Button
        type="submit"
        variant="contained"
        className="task-form-button"
        disabled={!title} >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
