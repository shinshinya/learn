import React from "react";

export const IncompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
