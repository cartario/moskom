import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
  
  const [email, setMail] = useState(``);
  const [name, setName] = useState(``);
  const [pass, setPass] = useState(``);
  const [checkPass, setCheckPass] = useState(``);
  const [conditions, setConditions] = useState(false);

  const a = email.length > 6 ? `green` : `red`; 

  const changeHandlerName = (e) => {
    const value = e.target.value;      
    setName(value);
  };

  const changeHandlerEmail = (e) => {
    const value = e.target.value;    
    setMail(value);
  }

  const changeHandlerPass = (e) => {
    const value = e.target.value;    
    setPass(value);
  }

  const changeHandlerCheckPass = (e) => {
    const value = e.target.value;    
    setCheckPass(value);
  }

  const changeHandlerConditions = () => {     
    setConditions(!conditions);    
  }

  return (
    <Form onSubmit={(e)=>{
      e.preventDefault();
      console.log({name, email,pass, checkPass, conditions});
    }}>
      
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="email">Email</Label>
        <Input style={{borderColor: a}} value={email} onChange={changeHandlerEmail} type="email" name="email" id="email" placeholder="Введите e-mail" />
      </FormGroup>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="nikname">Никнейм</Label>
        <Input value={name} onChange={changeHandlerName} type="text" name="nikname" id="nikname" />        
      </FormGroup>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="password">Пароль</Label>
        <Input value={pass} onChange={changeHandlerPass} type="password" name="password" id="password" placeholder="Введите пароль" />
      </FormGroup>
      <Rules />
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="checkPassword">Пароль еще раз</Label>
        <Input value={checkPass} onChange={changeHandlerCheckPass} type="checkPassword" name="checkPassword" id="checkPassword" placeholder="Введите еще раз пароль" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input value={conditions} onChange={changeHandlerConditions} type="checkbox" />{' '}
          Я принимаю условия <a href="#">пользовательского соглашения</a>
        </Label>
      </FormGroup>
      <div style={{textAlign: `center`, }}><Button style={{backgroundColor: `#558CB7`}}>Зарегистрироваться</Button></div>
    </Form>
  );
}

export default Example;
