import React from 'react';



export default ({password, touched}) => {
  const isValidPassword = !!password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/);
  const passwordSize = !!password.match(/[0-9a-zA-Z]{6,32}$/);
  const hasDifLetters = !!password.match(/(?=.*[a-z])(?=.*[A-Z])/);
  const hasNumber = !!password.match(/(?=.*[0-9])/);

  const getMessage = (password, text, inCase) => {
    switch(true) {
      case inCase:
    return <li className="success">{text}</li>
      case password && !inCase:
    return <li className="error">{text}</li>
      default:
    return <li className="default">{text}</li>      
    }
  };

  return (
    <div className="rules">
      <span>Пароль должен содержать</span>
      <ul >
       {getMessage(password, `От 6 до 32 символов`, passwordSize)}
       {getMessage(password, `Цифру`, hasNumber)}
       {getMessage(password, `Заглавную и строчную букву`, hasDifLetters)}       
        {/* <li>{password}</li>
        <li>{JSON.stringify(hasDifLetters)}</li> */}
      </ul>
    </div>
  );
};
