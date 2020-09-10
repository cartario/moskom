import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegistrationForm from './registration-form';

const ModalExample = (props) => {
  const [isSubmitting, setSubmitting] = useState(false); 
  
  const styledButton = isSubmitting ? `green` :  `#558CB7`;

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    
    <div>
      <Button 
        style={{backgroundColor: styledButton, borderColor: `#558CB7`}} 
        color="danger" 
        onClick={toggle} 
        disabled={isSubmitting}
        >{buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{border: `none`}} toggle={toggle}>Регистарция</ModalHeader>
        <ModalBody>
          <RegistrationForm setSubmitting={setSubmitting} setModal={setModal}/>
        </ModalBody>       
      </Modal>
    </div>
  );
}

export default ModalExample;

