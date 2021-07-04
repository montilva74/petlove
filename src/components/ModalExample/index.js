import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    data
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}> {data.firstName + " " + data.lastName } </ModalHeader>
        <ModalBody>
          {data.title} {data.firstName} {data.lastName}
          <a href={data.email}> {data.email} </a>  
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;