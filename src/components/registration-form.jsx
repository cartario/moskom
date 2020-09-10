import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getTouchedValidInput, getValidPassword} from '../validation';

const Rules = () => {
  return (
    <>
      <p>Пароль должен содержать</p>
      <ul style={{listStyle: `none` , padding: 0}}>
        <li>От 6 до 32 символов</li>
        <li>Цифру</li>
        <li>Заглавную и строчную букву</li>
      </ul>
    </>
  );
};

const Example = (props) => {
  const {setSubmitting, setModal} = props;
  
  const [form, setForm] = useState({
    email: ``,
    name: ``,
    password: ``,
    checkPassword: ``,    
  });
  const [conditions, setConditions] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    name: false,
  });

  const allFieldsFulled = Object.values(form).every((value)=>Boolean(value));
  const isValidEmail = !!form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  const isValidName = !!form.name.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{2,40}$/);
  const isValidPassword = true;
  const isValidCheckPass = true;

  console.log(isValidName)
  
  const isValidForm = allFieldsFulled && isValidEmail && isValidName && isValidPassword && isValidCheckPass && conditions;

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;    
    setForm({
      ...form, [name]:value
    });    
  };

  const blurHandler = (e) => {    
    const name = e.target.name;    
    setTouched({
      ...touched, [name]:true
    });   
  };

  const changeHandlerConditions = () => {     
    setConditions(!conditions);    
  };

  return (
    <Form onSubmit={(e)=>{
      e.preventDefault();
      setSubmitting(true);
      setModal(false);
      console.log(JSON.stringify(form));
    }}>
      
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="email">Email</Label>
        <Input 
          style={{borderColor: getTouchedValidInput(isValidEmail, touched.email)}} 
          value={form.email}        
          onBlur={blurHandler} 
          onChange={changeHandler}        
          type="email" 
          name="email" 
          id="email" 
          placeholder="Введите e-mail" />
        {touched.email && !isValidEmail && <p style={{color:`red`}}>Не забудьте ввести действительный email</p>}
      </FormGroup>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="name">Никнейм</Label>
        <Input 
          style={{borderColor: getTouchedValidInput(isValidName, touched.name)}}
          value={form.name} 
          onBlur={blurHandler} 
          onChange={changeHandler} 
          type="text" 
          name="name" 
          id="name" />
        {touched.name && !isValidName && <p style={{color:`red`}}> Не забудьте ввести корректный никнейм</p>}        
      </FormGroup>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="password">Пароль</Label>
        <Input value={form.pass} onChange={changeHandler} type="password" name="password" id="password" placeholder="Введите пароль" />
      </FormGroup>
      <Rules />
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="checkPassword">Пароль еще раз</Label>
        <Input value={form.checkPassword} onChange={changeHandler} type="checkPassword" name="checkPassword" id="checkPassword" placeholder="Введите еще раз пароль" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input value={conditions} onChange={changeHandlerConditions} type="checkbox" name="conditions"/>{' '}
          Я принимаю условия <a href="#">пользовательского соглашения</a>
        </Label>
      </FormGroup>
      <div style={{textAlign: `center`, }}><Button disabled={!isValidForm} style={{backgroundColor: `#558CB7`}}>Зарегистрироваться</Button></div>
    </Form>
  );
}

export default Example;
