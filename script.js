const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector("#input");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    // agar yeah e nahi lagayene toh add todo button click karne par or enterclick karne
    // par bar bar page refresh hoga
    // preventDefault(); (imp)
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = `
        <span class="text">${newTodoText}</span>
        <span class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
            <button class="todo-btn edit">Edit</button>
        </span>`;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if (e.target.classList.contains("edit")) {
        const edittext = e.target.parentNode.parentNode.querySelector(".text").innerHTML;
        todoInput.value = edittext;
    }
});
