import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (localStorage.getItem('email') && task === null) {
      console.log("assigned task");
      // console.log(setTask)
      // return task;
    }else if(localStorage.getItem('email') && task !== ""){
      console.log("Task pending")
    }
  };

  return (
    <div>
      <div>
        <h1>Task Assign: </h1>
      </div>
      <div>
        <label>Select Employee Name:</label>
        <select>
          <option value="0">select</option>
          <option value="emp0">emp0@gamil.com</option>

          <option value="emp1">emp1@gmail.com</option>

          <option value="emp2">emp2@gmail.com</option>
          <option value="emp2">emp3@gmail.com</option>
          <option value="emp2">emp4@gmail.com</option>
          <option value="emp2">emp5@gmail.com</option>
        </select>
      </div>

      <div>
        <div>
          <label>Task</label>
          <textarea
            onChange={(e) => setTask(e.target.value)}
            value={task}
          ></textarea>
        </div>
        <button
          type="Submit"
          placeholder="Enter the task"
          onClick={handleSubmit}
        >Assign</button>
      </div>
    </div>
  );
};

export default Home;
