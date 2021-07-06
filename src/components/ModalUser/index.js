import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { UserImg } from './styles';

const ModalUser = (props) => {
  const {
    data
  } = props;

  const [modal, setModal] = useState(false);

  const modalStyles={
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  const abrirModal = () => {
    setModal(!modal);
  }

  return (
    <div>
      <Button color="none" onClick={ abrirModal }>{data.firstName + ' ' + data.lastName}</Button>

<Modal isOpen={modal} style={modalStyles}>
  <ModalHeader>
    <UserImg src={data.picture} />
    {data.firstName + ' ' + data.lastName}
  </ModalHeader>
  <ModalBody>
    {data.email}
  </ModalBody>
  <ModalFooter>
      <Button color="secondary" onClick={ abrirModal }>Cerrar</Button>
  </ModalFooter>
</Modal>
    </div>
  );
}

export default ModalUser;