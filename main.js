// Version 4 - Booleans

var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My Todos', this.todos);
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function (position, todoText) {
    // the 2nd todoText here is the parameter.
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
};

todoList.addTodo('latest item');
todoList.toggleCompleted(0);

// Version 3 - Objects

// 1. It should store the todos array on an object

// var todos = ['item 1', 'item 2', 'item 3'];  move this into an array on an object
// no ; in a object
// var todoList = {
//   todos: ['item 1', 'item 2', 'item 3']
// };

// console.log(todoList);

// 2. It should have a displayTodos method
// 3.  It should have an addTodo method
// 4.  It should have a changeTodo method
// var todoList = {
//   todos: ['item 1', 'item 2', 'item 3'],
//   displayTodos: function () {
//     console.log(this.todos);
//   },
//   addTodo: function (todo) {
//     this.todos.push(todo);
//     this.displayTodos();
//   },
//   changeTodo: function (position, newValue) {
//     this.todos[position] = newValue;
//     this.displayTodos();
//   },
//   deleteTodo: function (position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
// };

// todoList.deleteTodo(0);

// Version 1 - Arrays
// store todos
// var todos = ['item 1', 'item 2', 'item 3'];
// display todos
// console.log('My Todos: ', todos);
// add todos use push, adds to end
// todos.push('item 4');
// console.log('My Todos: ', todos);

// change a todo.
// get the item: tell pc which item you want to change in bracket notation.
// update it = "new value"
// todos[0] = 'old item 1';
// console.log('My Todos: ', todos);

// delete todos
// use splice()  tell where to start (position) and how many to delete
// todos.splice(0, 1);
// console.log('My Todos: ', todos);

// Version 2 Functions

// function displayTodos() {
//   console.log('My Todos: ', todos);
// }
// displayTodos();

// It should have a function to add new todos
// customise the function
// function addTodo(todo) {
//   todos.push(todo);
//   displayTodos();
// }

// addTodo('new argument');

// It should have a function to change a todo

// function changeTodo(position, newValue) {
//   todos[position] = newValue;
//   displayTodos();
// }

// changeTodo(0, 'changed');

// It should have a function to delete a todo

// function deleteTodo(position) {
//   todos.splice(position, 1);
//   displayTodos();
// }

// deleteTodo(3);
