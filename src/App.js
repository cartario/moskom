import React from 'react';
import Modal from './components/modal';
import './App.css';


function App() {
  return (
    <div className="App">
      <Modal 
      buttonLabel={`Регистрация`}
      className={`registration`}
      />
    </div>
  );
}

export default App;
