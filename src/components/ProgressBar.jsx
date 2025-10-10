import React from "react";

function ProgressBar({ current, total }) {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;