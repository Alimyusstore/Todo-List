const todoInput = document.querySelector(".todoInput");
const dueDate = document.querySelector(".dueDate");
const result = document.querySelector(".result");

let res = [{name: "todo", dueDateValue: "2023-09-09"}];

function addTodo() {
  let name = todoInput.value;
  let dueDateValue = dueDate.value;
  res.push({ name, dueDateValue });
  console.log(res);
  todoInput.value = "";
  dueDate.value = "";
  renderTodo();
}

function renderTodo() {
    let todoHtml = "";

  for (let i = 0; i < res.length; i++) {
    let todo = res[i];
    let {name, dueDateValue} = todo;
     let html = `
    <p>${name}${dueDateValue}
        <button onclick="
        res.splice(${i}, 1);
        renderTodo();
        " > DELETE</button>
    </p>`;
   todoHtml += html;
  }
  result.innerHTML = todoHtml;
}
// addTodo();

