/**
 * 未完了のTODOリストから指定の要素を削除する
 */
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

/**
 * 完了のTODOリストから指定の要素を削除する
 */
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

/**
 * 完了したTODOリストに要素(TODO)を追加する
 */
const createCompleteList = (todoText) => {
  const todoItem = createTodoItem(todoText, true);
  document.getElementById("complete-list").appendChild(todoItem);
};

/**
 * TODO要素を生成する
 */
const createTodoItem = (text, isComplete) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const newButton = document.createElement("button");
  newButton.innerText = isComplete ? "戻す" : "完了";
  newButton.addEventListener("click", () => {
    if (isComplete) {
      // 完了のTODO要素の戻すボタンがクリックされた場合
      const todoItem = newButton.parentNode;
      deleteFromCompleteList(todoItem);
      const todoText = todoItem.firstElementChild.innerText;
      createIncompleteList(todoText);
    } else {
      // 未完了のTODO要素の完了ボタンがクリックされた場合
      const todoItem = newButton.parentNode;
      deleteFromIncompleteList(todoItem);
      const todoText = todoItem.firstElementChild.innerText;
      createCompleteList(todoText);
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const todoItem = deleteButton.parentNode;
    if (isComplete) {
      deleteFromCompleteList(todoItem);
    } else {
      deleteFromIncompleteList(todoItem);
    }
  });

  div.appendChild(li);
  div.appendChild(newButton);
  div.appendChild(deleteButton);

  return div;
};

/**
 * 未完了のTODOリストに要素(TODO)を追加する
 */
const createIncompleteList = (todoText) => {
  const todoItem = createTodoItem(todoText, false);
  document.getElementById("incomplete-list").appendChild(todoItem);
};

/**
 * 新しいTODOを追加する
 */
const onClickAdd = () => {
  // テキストボックスの値を取得する
  const inputTodoText = document.getElementById("add-todo-text").value;

  if (inputTodoText.trim() !== "") {
    // テキストボックスの値を初期化する
    document.getElementById("add-todo-text").value = "";

    createIncompleteList(inputTodoText);
  }
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
