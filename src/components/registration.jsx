import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegistrationForm from './registration-form';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    
    <div>
      <Button style={{backgroundColor: `#558CB7`, borderColor: `#558CB7`}} color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{border: `none`}} toggle={toggle}>Регистарция</ModalHeader>
        <ModalBody>
          <RegistrationForm />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default ModalExample;
