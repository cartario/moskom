import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default (props)=>{
  const {setSubmitting, setModal, formData, setFormData} = props;
  const [form, setForm] = useState({sex: ``, education: ``, about: ``, politic: false,
  economic: false, events: false, 
});

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if(e.target.type!==`checkbox`){
      setForm({
        ...form,
        [name]: value
      })
    } else {
      setForm({
        ...form,
        [name]: !form[name]
      })
    }    
  };
  

  return (
    <Form onSubmit={(e)=>{
      e.preventDefault();
      setSubmitting(true);
      setModal(false);
      setFormData({...formData, ...form});
      console.log(JSON.stringify({...formData, ...form}));
    }}>
      <FormGroup tag="fieldset" onChange={changeHandler}>
        <legend>Выберите пол</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="sex" value="М" />{' '}
            М
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="sex" value="Ж" />{' '}
            Ж
          </Label>
        </FormGroup>        
      </FormGroup>
      <FormGroup>
        <Label for="education">Уровень образования</Label>
        <Input type="select" name="education" id="education" value={form.education} onChange={changeHandler}>
          <option></option>
          <option>Начальное</option>
          <option>Среднее</option>
          <option>Высшее</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="about">О себе</Label>
        <Input type="textarea" name="about" id="about" value={form.about} onChange={changeHandler}/>
      </FormGroup>
      <Label>Хочу подписаться на рубрики:</Label>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="politic" value={form.politic} onChange={changeHandler}/>{' '}
          Политика
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="economic" value={form.economic} onChange={changeHandler}/>{' '}
          Экономика
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="events" value={form.events} onChange={changeHandler}/>{' '}
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
