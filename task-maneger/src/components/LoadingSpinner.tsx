import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../App.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner-container">
      <CircularProgress className="loading-spinner" color="primary" />
    </div>
  );
};

export default LoadingSpinner;

