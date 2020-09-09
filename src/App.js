import React from 'react';
import Registration from './components/registration';
import './App.css';


function App() {
  return (
    <div className="App">
      <Registration 
      buttonLabel={`Регистрация`}
      className={`registration`}
      />
    </div>
  );
}

export default App;
