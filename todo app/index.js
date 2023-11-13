// finding the elements
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const todoAddButton = document.querySelector('#addTodoButton');
const todoLists = document.getElementById('lists');
const messageElement = document.querySelector('#message');


// show message
showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add('bg-success');
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    }, 1000);
};

// createTodo
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.classList.add('li-style');
    todoElement.id = todoId;
    todoElement.innerHTML = `<span> ${todoValue} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"></i> </button> </span>`;
    todoLists.appendChild(todoElement);

    // delete button
    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo);

};
// deleteTodo function
const deleteTodo = (event) => {
    const selectedTodo = event.target.parentElement.parentElement.parentElement;

    todoLists.removeChild(selectedTodo);
    showMessage("todo is deleted", "danger");

    
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(todo => todo.todoId === selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
};

// getTodosFromLocalStorage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];
};

// addTodo Function
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;

    // unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMessage("todo is added", "success");

    // add todo to localStorage
    const todos = getTodosFromLocalStorage();
    todos.push({todoId, todoValue});
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todoInput.value = "";
};

// loadTodos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo) =>  createTodo(todo.todoId, todo.todoValue));
};

// adding eventlisteners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);