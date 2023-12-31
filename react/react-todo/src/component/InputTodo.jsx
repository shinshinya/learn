import React from "react";

// CSS-in-JS
const style = {
  backgroundColor: "#65bbe9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div style={style} className="input-area">
      <input
        id="add-todo-text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button id="add-button" onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
