import React from 'react';

export default (props) => {
  return (
    <div style={{fontSize: `12px`}}> 
      <span>Не забудьте ввести корректный никнейм. Никнейм:</span>
      <ul>
        <li className="error">должен начинаться с буквы</li>
        <li className="error">должен состоять из более 3-х латинских символов без пробелов и спецсимволов</li>
        <li >может содержать цифры и нижнее подчеркивание</li>
      </ul>
    </div>
  );
};
