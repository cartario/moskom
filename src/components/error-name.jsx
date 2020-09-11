import React from 'react';

export default (props) => {
  return (
    <div style={{fontSize: `12px`}}> 
      <p>Не забудьте ввести корректный никнейм. Никнейм:</p>
        <ul>
          <li className="error">должен начинаться с буквы</li>
          <li className="error">должен состоять из латинских символов без пробелов и спецсимволов</li>
          <li >может содержать цифры и нижнее подчеркивание</li>
        </ul>
    </div>
  );
};
