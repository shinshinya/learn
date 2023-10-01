/**
 * 未完了リストから指定の要素を削除する
 */
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

/**
 * 未完了のTODOリストに要素(TODO)を追加する
 */
const createIncompleteList = (todoText) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = todoText;

  // button(完了)ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了のTODOリストに追加する要素(TODO)を取得
    const addTodo = completeButton.parentNode;

    // 押された完了ボタンの親タグ<div>(TODO)を未完了のTODOリストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // テキストを取得
    const completeText = addTodo.firstElementChild.innerText;

    // div以下を初期化
    addTodo.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = completeText;

    // button(戻る)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親タグ<div>(TODO)を未完了のTODOリストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const backText = deleteTarget.firstElementChild.innerText;

      // 未完了のTODOリストに新しい要素(TODO)を追加する
      createIncompleteList(backText);
    });

    // divタグ(完了したTODOリストに追加する要素)の子要素に各要素を設定
    addTodo.appendChild(li);
    addTodo.appendChild(backButton);

    // 完了したTODOリストにTODOを作成
    document.getElementById("complete-list").appendChild(addTodo);
  });

  // button(削除)ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ<div>(TODO)を未完了のTODOリストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグ(未完了のTODOリストに追加する要素)の子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のTODOリストにTODOを作成
  document.getElementById("incomplete-list").appendChild(div);
};

/**
 * 新しいTODOを追加する
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputTodoText = document.getElementById("add-todo-text").value;
  document.getElementById("add-todo-text").value = "";

  // 未完了のTODOに新しい要素(TODO)を追加する
  createIncompleteList(inputTodoText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
