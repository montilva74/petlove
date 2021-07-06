import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { UserImg, Comment } from '../ModalComment/styles';

const ModalComment = (props) => {
  const {
    comments
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

  const notComments = () => {
    if(comments.length === 0) {
      return 'No hay comentarios en este post!'
    }
  }

  return (
    <div>
      <Button color="none" onClick={ abrirModal }> { comments.length + " Comments" } </Button>

<Modal isOpen={modal} style={modalStyles}>
  <ModalHeader>
    Comments
  </ModalHeader>
  <ModalBody>

    { notComments() }

    { comments.map( com =>
          <Comment key={com.id}>
            <UserImg src={com.owner.picture}></UserImg>
            <b>{ com.owner.firstName} { com.owner.lastName}</b> : { com.message}
          </Comment> ) }
  </ModalBody>
  <ModalFooter>
      <Button color="secondary" onClick={ abrirModal }>Cerrar</Button>
  </ModalFooter>
</Modal>
    </div>
  );
}

export default ModalComment;