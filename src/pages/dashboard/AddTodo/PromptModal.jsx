import React from "react";
import styled from "styled-components";
import { Modal, ModalBody } from "reactstrap";

const PromptModal = (props) => {
  const { className, toggle, modal, setAddTodosModal } = props;

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
        <ModalBody>
          <ModalBodyCon>
            <b>
              You have 0 task for the selected date. <br /> Tap the Plus sign to
              Add a new task.
            </b>
            <br />
            <img
              src="/images/plus-icon.svg"
              onClick={() => setAddTodosModal(true)}
              className="plus-icon openModal c-hand"
              alt=""
              height="40"
              width="40"
            />
          </ModalBodyCon>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PromptModal;


const ModalBodyCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;