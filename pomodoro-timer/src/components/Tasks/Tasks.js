import React, { useState, useEffect } from "react";
import CompletedTasks from "./CompletedTasks";

import { Form, Button } from 'react-bootstrap';

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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="task"
            placeholder="Enter in a task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form.Group>
        <Button disabled={!value.length > 0} type="submit">
          Add Task
        </Button>{" "}
        <Button onClick={() => handleReset()} variant="secondary">
          Reset
        </Button>
      </Form>
      <CompletedTasks completedTasks={completedTasks} />
    </div>
  );
};

export default Tasks;
