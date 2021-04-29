import React, { useState } from "react";

const Tasks = () => {
  const [value, setValue] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setCurrentTask(value);
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
      </form>
    </div>
  );
};

export default Tasks;
