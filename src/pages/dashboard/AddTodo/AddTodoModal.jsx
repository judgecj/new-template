import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import actions from '../../../redux/actions';

const AddTodoModal = (props) => {
  const {
    buttonLabel,
    className,
    startDate,
    modal,
    toggle,
    setPModal,
    setAddTodosModal,
  } = props;
  const { addTodo } = actions;
  const todoState = {
    task_name: "",
    details: "",
    status: "pending",
    start_time: startDate.toISOString(),
    end_time: "",
  };
  const dispatch = useDispatch();

  const [todoForm, setTodoForm] = useState(todoState);
  const [endDate, setEndDate] = useState();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTodoForm({
      ...todoForm,
      [name]: value,
    });
  };

  const onDateChange = (date) => {
    setEndDate(date);
    setTodoForm({
      ...todoForm,
      end_time: date.toISOString(),
    });
  };

  const handleAddTodo = (evt) => {
    evt.preventDefault();

    todoForm["start_time"] = startDate.toISOString();

    dispatch(addTodo(todoForm))
    setAddTodosModal(false);
    setPModal(false);
    setTodoForm(todoState);
  };

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>
          Please fill out the details below to add a new task
        </ModalHeader>

        <ModalBody>
          {/* Task Name, start_time, end_time, details, status */}
          <form>
            <div className="form-group mt-4">
              <label>Task Name</label>
              <Input
                type="text"
                placeholder="Enter Text"
                className="form-control"
                name="task_name"
                value={todoForm.task_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-4">
              <label>Task Description</label>
              <Input
                type="textarea"
                name="details"
                value={todoForm.details}
                onChange={handleChange}
                className="form-control bg-gray"
                id=""
                placeholder="Enter Task Description Here"
                style={{
                  height: "150px",
                  background: "#F7F7F7",
                }}
              />
            </div>

            <DateCon className="form-group mt-4">
              <div>
                <p>Start Date *</p> {/* Populated from the startDate */}
                <DatePicker selected={startDate} disabled />
              </div>
              <div>
                <p>End Date *</p> {/* Use React Calendar to add this */}
                <DatePicker
                  selected={endDate}
                  onChange={(date) => onDateChange(date)}
                  placeholderText="Select Date"
                />
              </div>
            </DateCon>

            <div className="text-center mt-4">
              <button className="btn btn-primary mt-4" onClick={handleAddTodo}>
                {buttonLabel}
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddTodoModal;

const DateCon = styled.div`
  display: flex;
  justify-content: space-between;
`;
