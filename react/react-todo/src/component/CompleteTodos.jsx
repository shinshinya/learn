import React from "react";

export const CompleteTodos = ({ todos, onClickBack }) => {
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => (
          <div key={todo} className="list-row">
            <li className="list-row">{todo}</li>
            <button onClick={() => onClickBack(index)}>戻る</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
