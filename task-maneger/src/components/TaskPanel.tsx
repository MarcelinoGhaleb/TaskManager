import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Task } from "./types";
import "../App.css";

interface TaskPanelProps {
  tasks: Task[];
  handleDeleteTask: (taskId: string) => void;
  handleToggleCompletion: (taskId: string) => void;
  loading: boolean;
}

const TaskPanel: React.FC<TaskPanelProps> = ({
  tasks,
  handleDeleteTask,
  handleToggleCompletion,
  loading,
}) => {
  if (loading) return <p>Loading tasks...</p>;
  const noTasks = tasks.length === 0;

  return (
    <div className="task-list-container">
      {noTasks ? (
        <p>No tasks to display.</p>
      ) : (
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              dense
              button
              onClick={() => handleToggleCompletion(task.id)}
            >
              <Checkbox
                edge="start"
                checked={task.completed}
                tabIndex={-1}
                disableRipple
                className="checkbox-checked-color"/>
              <ListItemText primary={task.title} secondary={task.description} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TaskPanel;

