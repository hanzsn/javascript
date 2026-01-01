class Todo {
  constructor(
    title = "",
    description = "",
    dueDate = "",
    priority = "low",
    completed = false
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
    return todo;
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos;
  }

  toggleCompleted(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
    return todo;
  }

  getTodos() {
    return [...this.todos];
  }
}

export { Todo, TodoList };
