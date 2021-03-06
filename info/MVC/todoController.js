class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.renderTodos();
        this.view.onAddTodo(data => this.addTodo(data));
    }

    renderTodos() {
        const todos = this.model.todos_all();
        this.view.renderTodos(todos);
    }

    addTodo(text) {
        this.model.todos_create(text);
        this.updateList();
    }


    // To this day I still think this belongs in view, but oh wwell.
    updateList() {
        const todos = this.model.todos_all();
        this.view.renderTodos(todos);
    }
    // send in what was clicked to view grab from app.js add an event listener to the app.js to call init and pass in the event as a function
    clickedAnElement(e) {

    }
}

export default TodoController;