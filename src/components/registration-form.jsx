import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {validationSchema, getValidPassword} from '../validation';
import ErrorName from './error-name';
import Rules from './rules';
import ErrorCheckPass from './error-check-pass';

export default (props) => {
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
    password: false,
    checkPassword: false,
  });

  const {allFieldsFulled,isValidEmail, isValidName,isValidPassword,isValidCheckPass} = validationSchema(form);
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
        <Label className="label" for="email">Email</Label>
        <Input           
          valid = {isValidEmail&&touched.email} invalid = {!isValidEmail&&touched.email} 
          value={form.email} onBlur={blurHandler} onChange={changeHandler}        
          type="email" name="email" id="email" placeholder="Введите e-mail" />
        {touched.email && !isValidEmail && <p style={{color:`red`}}>Не забудьте ввести действительный email</p>}
      </FormGroup>
      <FormGroup>
        <Label className="label" for="name">Никнейм</Label>
        <Input 
          valid = {isValidName&&touched.name} invalid = {!isValidName&&touched.name} 
          value={form.name} onBlur={blurHandler} onChange={changeHandler} 
          type="text" name="name" id="name" />

        {!isValidName&&touched.name && <ErrorName />} 

      </FormGroup>
      <FormGroup>
        <Label className="label" for="password">Пароль</Label>
        <Input 
        valid = {isValidPassword&&touched.password} invalid = {!isValidPassword&&touched.password} 
        value={form.pass} onBlur={blurHandler} onChange={changeHandler} 
        type="password" name="password" id="password" placeholder="Введите пароль" />
        {touched.password && !isValidPassword && <p style={{color:`red`}}> Слишком простой пароль</p>}       
      </FormGroup>
      <Rules />
      <FormGroup>
        <Label className="label" for="checkPassword">Пароль еще раз</Label>
        <Input
        valid = {isValidCheckPass&&touched.checkPassword} 
        invalid = {!isValidCheckPass&&touched.checkPassword} 
        value={form.checkPassword} onBlur={blurHandler}
        onChange={changeHandler} type="password" name="checkPassword" id="checkPassword" placeholder="Введите еще раз пароль" />
        
        {form.checkPassword && isValidCheckPass ?
          <span className="checkPass checkPassOk"> Пароли совпадают</span> :
          <ErrorCheckPass form={form} touched={touched}/>}
        
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input value={conditions} onChange={changeHandlerConditions} type="checkbox" name="conditions"/>{' '}
          Я принимаю условия <a href="#">пользовательского соглашения</a>
        </Label>
      </FormGroup>
      <div className="center">
        <Button disabled={!isValidForm} style={{backgroundColor: `#558CB7`}}>Зарегистрироваться</Button>
      </div>
    </Form>
  );
}
