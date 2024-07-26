//! Bu sayfa sayesinde input içine girilen değeri
//! kaydediyor aşağıya eklememiz için veriyi alıyor.
import React from 'react';

function ToDoItem({ text }) {
  return (
    <div className="todo-item">
      {text}
    </div>
  );
}

export default ToDoItem;
