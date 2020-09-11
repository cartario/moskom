import React from 'react';

export default (props) => {
  return (
    <div style={{fontSize: `12px`}}> 
          <p>Не забудьте ввести корректный никнейм. Никнейм:</p>
          <ul>
            <li style={{color: `red`}}>должен начинаться с буквы</li>
            <li style={{color: `red`}}>должен состоять из латинских символов без пробелов и спецсимволов</li>
            <li style={{color: `grey`}}>может содержать цифры и нижнее подчеркивание</li>
          </ul>
        </div>
  );
};
