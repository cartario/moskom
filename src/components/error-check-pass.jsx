import React from 'react';

export default ({form, touched}) => {
  switch(true){
    case form.email && form.checkPassword === form.email:
      return (
        <span className="checkPass error">Пароль не должен совпадать с почтой</span>
      );
    case form.name && form.checkPassword === form.name:
      return (
        <span className="checkPass error">Пароль не должен совпадать с никнеймом</span>
      );
    case touched.checkPassword && form.checkPassword !==form.password:
      return (
        <span className="checkPass error"> Пароли не совпадают</span>
      );    
    default:
      return ``
  }
};
