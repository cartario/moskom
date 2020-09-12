import React from 'react';



export default ({password, touched}) => {  
  const passwordSize = !!password.match(/[0-9a-zA-Z]{6,32}$/);
  const hasDifLetters = !!password.match(/(?=.*[a-z])(?=.*[A-Z])/);
  const hasNumber = !!password.match(/(?=.*[0-9])/);

  const getMessage = (password, inCase) => {
    switch(true) {
      case inCase:
    return `success`
      case password && !inCase:
    return `error`
      case touched && !inCase:
        return `error`
      default:
    return `default`      
    }
  };

  return (
    <div className="rules">
      <span>Пароль должен содержать</span>
      <ul >
        <li className={password.length < 2 ? `default` : getMessage(password, passwordSize)}>От 6 до 32 символов</li>
        <li className={password.length < 2 ? `default` :  getMessage(password, hasNumber)}>Цифру</li>
        <li className={password.length < 2 ? `default` : getMessage(password, hasDifLetters)}>Заглавную и строчную букву</li>
       

      </ul>
    </div>
  );
};
