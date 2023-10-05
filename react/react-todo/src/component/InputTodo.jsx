import React from "react";

export const InputTodo = ({ todoText, onChange, onClick }) => {
  return (
    <div className="input-area">
      <input
        id="add-todo-text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
