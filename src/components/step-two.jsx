import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default (props)=>{
  const {setSubmitting, setModal, formData} = props;
  return (
    <Form onSubmit={(e)=>{
      e.preventDefault();
      setSubmitting(true);
      setModal(false);
      // setFormData(form);
      console.log(JSON.stringify(formData));
    }}>
      <FormGroup tag="fieldset">
        <legend>Выберите пол</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="sex" />{' '}
            М
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="sex" />{' '}
            Ж
          </Label>
        </FormGroup>        
      </FormGroup>
      <FormGroup>
        <Label for="education">Уровень образования</Label>
        <Input type="select" name="education" id="education">
          <option>Начальное</option>
          <option>Среднее</option>
          <option>Высшее</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="about">О себе</Label>
        <Input type="textarea" name="about" id="about" />
      </FormGroup>
      <Label>Хочу подписаться на рубрики:</Label>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Политика
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Экономика
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Проишествия
        </Label>
      </FormGroup>
      <p></p>
      <div className="center">
        <Button style={{backgroundColor: `#558CB7`}}>Зарегистрироваться</Button>
      </div>
    </Form>
  );
};
