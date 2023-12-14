import React from 'react';
import './Input.css';
const Input = ({ setValueInput, valueInput, addTask }) => {
  return (
    <div className="enter-task">
      <input
        onKeyDown={(e) => {
          e.code == 'Enter' ? addTask() : setValueInput(e.target.value.trim());
        }}
        onChange={(e) => {
          setValueInput(e.target.value.trim());
        }}
        type="text"
        placeholder="تسک خود را وارد کنید"
        value={valueInput}
      />
    </div>
  );
};

export default Input;
