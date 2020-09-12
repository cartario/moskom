import React from 'react';
import {getMessage} from '../utils';

export default ({password, touched}) => {  
  const passwordSize = !!password.match(/[0-9a-zA-Z]{6,32}$/);
  const hasDifLetters = !!password.match(/(?=.*[a-z])(?=.*[A-Z])/);
  const hasNumber = !!password.match(/(?=.*[0-9])/);

  return (
    <div className="rules">
      <span>Пароль должен содержать</span>
      <ul>
        <li className={          
          password.length < 2 &&!touched ? `default` : getMessage(password, passwordSize, touched)}>
          От 6 до 32 символов</li>
        <li className={         
          !hasDifLetters && !hasNumber && !touched ? `default` :  getMessage(password, hasNumber, touched)}>
          Цифру
        </li>
        <li className={         
          password.length < 2 &&!touched? `default` : getMessage(password, hasDifLetters, touched)}>
          Заглавную и строчную букву
        </li>
      </ul>
    </div>
  );
};
