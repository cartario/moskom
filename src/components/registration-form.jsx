import React from 'react';
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
  return (
    <Form onSubmit={(e)=>{
      e.preventDefault();
      console.log(`submiting`)
    }}>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Введите e-mail" />
      </FormGroup>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="nikname">Никнейм</Label>
        <Input type="text" name="nikname" id="nikname" />        
      </FormGroup>
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="password">Пароль</Label>
        <Input type="password" name="password" id="password" placeholder="Введите пароль" />
      </FormGroup>
      <Rules />
      <FormGroup>
        <Label style={{fontWeight: `bold`}} for="checkPassword">Пароль еще раз</Label>
        <Input type="checkPassword" name="checkPassword" id="checkPassword" placeholder="Введите еще раз пароль" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Я принимаю условия <a href="#">пользовательского соглашения</a>
        </Label>
      </FormGroup>
      <div style={{textAlign: `center`, }}><Button style={{backgroundColor: `#558CB7`}}>Зарегистрироваться</Button></div>
    </Form>
  );
}

export default Example;
