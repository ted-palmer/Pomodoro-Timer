import React, { useState, useEffect } from "react";
import CompletedTasks from "./CompletedTasks";

const Tasks = ({ addTask, reset, completedCycle }) => {
  const [value, setValue] = useState("");
  const [currentTask, setCurrentTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    if (completedCycle) {
      setCompletedTasks((completedTasks) => [...completedTasks, currentTask]);
      completedCycle = false;
    }
  }, [completedCycle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setCurrentTask(value);
    addTask();
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
      <CompletedTasks completedTasks={completedTasks} />
    </div>
  );
};

export default Tasks;
