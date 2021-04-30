import React, { useState, useEffect } from "react";

const CompletedTasks = ({ completedTasks }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(completedTasks);
  }, [completedTasks]);

  return (
    <div>
      {list.length > 0 ? (
        <div>
          <h3>Completed Tasks:</h3>
          {list.map((task) => (
            <h4 key={task}>{task}</h4>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CompletedTasks;
