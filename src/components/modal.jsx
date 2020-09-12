import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegistrationForm from './registration-form';
import StepTwo from './step-two';

export default ({buttonLabel, className}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const toggle = () => setModal(!modal);

  return (    
    <>
      <Button 
        style={{backgroundColor: isSubmitting ? `green` :  `#558CB7`}}         
        onClick={toggle} 
        disabled={isSubmitting}
        >{buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{border: `none`}} toggle={toggle}>Регистрация</ModalHeader>
        <ModalBody>
          
          {formData ? <StepTwo setFormData={setFormData} formData={formData} setSubmitting={setSubmitting} setModal={setModal}/> : <RegistrationForm setFormData={setFormData} setSubmitting={setSubmitting} setModal={setModal}/>
          }
        </ModalBody>       
      </Modal>
    </>
  );
}
