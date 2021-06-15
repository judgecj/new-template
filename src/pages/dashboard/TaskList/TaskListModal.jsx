import React, {useState} from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import styled from "styled-components";

import TodoItem from "./TodoItem";

const TaskListModal = (props) => {
  const {
    className,
    startDate,
    toggle,
    modal,
    setAddTodosModal,
    filteredTodos,
    newTodo  ,
  } = props;

  const [holdData, setHoldData] = useState({})

  // const [holdData, setHoldData] = useState({});

  
  // console.log("completedTasks", completedTasks);
  // console.log("uncompletedTasks", uncompletedTasks);

  // if (Object.keys(holdData).length === 0) {
  //   console.log('holdData', holdData)
  // } else {
  //   if(holdData['status'] === 'completed'){
  //     // setCompletedTasks([...completedTasks, holdData]);
  //     // uncompletedTasks.forEach(task => {
  //     //   if(task.id !== holdData.id){
  //     //     uncompletedTasks.push(task)
  //     //   }
  //     // })
  //     console.log('completed Data', holdData)
  //   } else {
  //    console.log("not completed Data", holdData);
  //   }
  // }

  if (Object.keys(holdData) === 0) {
    return
  } else {

        console.log("data-------holdData----------", holdData);
    // const   currentTodo = filteredTodos.find(todo => todo.id===holdData.id);
    const  currentTodo  = filteredTodos.filter((item) => item.id !== holdData.id);

      //  console.log("data-----------currentTodo  ------", currentTodo  );
                // filteredTodos = currentTodo.push( holdData)
              // let afterPush =  currentTodo.push(holdData)

                newTodo(currentTodo , holdData );   

    // currentTodo.status = holdData.status
    // console.log("new data holdData--------> ", currentTodo);

    // filteredTodos.push(holdData)

      // currentTodo.status = currentTodo.currentTodo
    
  }

  // console.log("completedTasks", completedTasks);
  // console.log("uncompletedTasks", uncompletedTasks);

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  // today -> show button
  // startDate.toISOString().substring(0, 10) ===
  // new Date().toISOString().substring(0, 10);

  // yesterday
  // startDate < new Date();

  // tomorrow or next

  // const completedTasks = ;

  const sD = new Date(startDate);
  const readableDate = sD.toDateString();
  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>{readableDate}</ModalHeader>
        <ModalBody>
          <Wrapper>
            <div className="todo-completed box">
              <p className="text-muted mb-3">List of all uncompleted Tasks</p>
              {console.log("data ================>", filteredTodos)}
              <div className="content">
                <small className="mb-3">
                  To mark a task completed, check the box
                </small>
                {filteredTodos &&
                  filteredTodos.map((todo, idx) =>
                    todo.status === "" ? (
                      // <TodoItem task={todo} setHoldData={setHoldData} />
                     
                      <TodoItem task={todo} setHoldData={setHoldData} />
                    ) : (
                      
                      <div>{/* {todo.task_name} */}</div>
                    )
                  )}

                {/* {uncompletedTasks &&
                  uncompletedTasks.map((tk) => (
                    <TodoItem
                      task={tk}
                      completed={completedTasks}
                      uncompleted={uncompletedTasks}
                      // setHoldData={setHoldData}
                    />
                  ))} */}
              </div>
            </div>
            <div className="todo-uncompleted box">
              <p className="text-muted mb-3">List of all completed Tasks</p>

              <div className="content">
                <small className="mb-3">
                  {" "}
                  To mark a task completed, check the box
                </small>

                {filteredTodos &&
                  filteredTodos.map((todo, idx) =>
                    todo.status !== "completed" ? (

                      <div>{/* {todo.task_name} */}</div>

                    ) : (
                      <TodoItem task={todo} setHoldData={setHoldData} />
                      
                    
                    )
                  )}
                {/* {completedTasks &&
                  completedTasks.map((tk) => (
                    <TodoItem
                      task={tk}
                      completed={completedTasks}
                      uncompleted={uncompletedTasks}
                      // setHoldData={setHoldData}
                    />
                  ))} */}
              </div>

              <img
                style={{
                  display:
                    startDate.toISOString().substring(0, 10) ===
                    new Date().toISOString().substring(0, 10)
                      ? "unset"
                      : startDate < new Date()
                      ? "none"
                      : "unset",
                }}
                onClick={() => setAddTodosModal(true)}
                src="/images/plus-icon.svg"
                className="plus-icon"
                alt=""
                height="70"
                width="70"
              />
            </div>
          </Wrapper>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TaskListModal;

const Wrapper = styled.div`
  position: relative;
  .plus-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    /* width: 7rem; */
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  .todo-uncompleted {
    .content {
      background: #3b5999;
      color: white;
    }
  }

  .todo-completed {
    .content {
      background: #4c4c4c;

      color: white;
    }
  }
  .box {
    width: 100%;
    max-width: 26rem;
    .content {
      padding: 1rem;

      border-radius: 15px;
    }
  }
  .todo-item {
    display: flex;
    align-items: baseline;
    margin-bottom: 1rem;
    .text-content {
      margin-left: 1rem;
      small {
        /* text-align: center; */
        display: block;
      }
    }
  }
`;
