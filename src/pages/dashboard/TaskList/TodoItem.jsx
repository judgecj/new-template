import React from "react";
import { Input } from "reactstrap";

const TodoItem = ({ task, setHoldData }) => {

  const testTask = (todo) => {
    console.log("completed", todo);
      console.log("click check value", todo);
      if (todo["status"] === "completed") {
        todo["status"] = "";
        // console.log("completed", value);
      } else {
        todo["status"] = "completed";
        // value["status"] = "completed";
        // console.log("not completed", value);
      }

      setHoldData(todo);
  }


  // const handleCheck = (value) => {
  //   console.log("click check value", value);
  //   if (value["status"] === "completed") {
  //     value["status"] = "";
  //     // console.log("completed", value);
  //   } else {
  //     value["status"] = "completed";
  //         // value["status"] = "completed";
  //     // console.log("not completed", value);
  //   }

  //   setHoldData(value);
  // };

  return (
    <div className="todo-item" key={task && task.id}>
      <Input
        type="checkbox"
        className="custom-input"
        onChange={() => testTask(task)}
        defaultChecked={task.status === "completed" ? true : false}
      />
      <div className="text-content">
        <p>{task && task.task_name}</p>
        <small>
          {/* You’re having a meeting the Saathi Hiring Team on the 17th of March,
          2021 by 4PM (WAT)  */}
          {task && task.details}
        </small>
      </div>
    </div>
  );
};

export default TodoItem;
