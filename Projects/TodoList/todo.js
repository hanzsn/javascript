class Todo {
  constructor(
    taskName,
    date = new Date(),
    bold = false,
    showDate = false,
    lineThrough = false,
    complete = false,
    priority = false
  ) {
    this.id = crypto.randomUUID();
    this.taskName = taskName;
    this.date = date;
    this.lineThrough = lineThrough;
    this.bold = bold;
    this.showDate = showDate;
    this.complete = complete;
    this.priority = priority;
  }

  isPriority() {
    this.priority = !this.priority;
  }
}

class TodoList {
  constructor() {
    if (typeof window !== "undefined" && window.localStorage) {
      const saved = localStorage.getItem("todos");
      if (saved) {
        const parsed = JSON.parse(saved);
        //convert date string back to date object
        this.todos = parsed.map((todo) => ({
          ...todo,
          date: new Date(todo.date),
        }));
      } else {
        this.todos = [];
      }
    } else {
      this.todos = [];
    }
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  add(todo) {
    this.todos.push(todo);
    this.save();
    return todo;
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.save();
    return this.todos;
  }

  showDate() {
    const todo = this.todos.find((todo) => (todo.id = id));
    if (todo) {
      todo.showDate = !todo.showDate;
      this.save();
    }
  }

  toggleLineThrough(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) todo.lineThrough = !todo.lineThrough;
    this.save();
    return todo;
  }

  toggleComplete(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) todo.complete = !todo.complete;
    this.save();
    return todo;
  }

  getTodos() {
    return [...this.todos];
  }
}

export { Todo, TodoList };
