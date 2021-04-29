import React, { useState } from "react";

const Tasks = ({ addTask, reset }) => {
  const [value, setValue] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask();
    setCurrentTask(value);
    setValue("");
  };

  const handleReset = () => {
    setValue("");
    setCurrentTask("");
    reset();
    setValue("");
  };

  return (
    <div>
      Current Task: {currentTask}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Enter in a task"
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button disabled={!value.length > 0}>Add Task</button>
        <button onClick={() => handleReset()}>Reset</button>
      </form>
    </div>
  );
};

export default Tasks;
