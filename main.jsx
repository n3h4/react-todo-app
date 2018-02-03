
class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = { text: '', todos: [] };

    }

    handleChange(e) {

        this.setState({ text: e.target.value });

    }

    handleSubmit(e) {

        e.preventDefault();

        var prevItem = { text: this.state.text };
        var newTodos = this.state.todos.concat(prevItem);

        this.setState({ text: '', todos: newTodos });
    }

    handleDelete(itemToBeDeleted) {

        // console.log(itemToBeDeleted);  
        var newTodos = this.state.todos.filter((todo) => {
            return todo != itemToBeDeleted
        });

        this.setState({ todos: newTodos });
    }

    handleDone(markAsDone) {

        var _todo = this.state.todos;

        var newTodo = _todo.filter((todo) => {

            return todo === markAsDone;

        })[0];
        // console.log("working");

        done != done;
        this.setState({ todos: newTodo })
    }

    render() {
        return (

            <div>
                <h1 className="header">Todo-List</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <input className="additems" placeholder="Add your list here" onChange={this.handleChange.bind(this)}
                        value={this.state.text} />
                </form>

                <div>
                    <p>All: {this.state.todos.length}</p>
                    <p>Completed: {this.state.todos.filter((todo) => { }).length}</p>
                    <p>Pending: </p>
                </div>

                <TodoList handleDelete={this.handleDelete.bind(this)} todos={this.state.todos} handleDone={this.handleDone.bind(this)}
                />
            </div>
        );
    }
}

class TodoList extends React.Component {

    render() {
        return (

            <div>

                <ul className="list">
                    {this.props.todos.map((item, index) => {

                        return <TodoItem

                            handleDone={this.props.handleDone}
                            handleDelete={this.props.handleDelete.bind(this)}

                            item={item} />
                    })}

                </ul>

            </div>
        );
    }
}

class TodoItem extends React.Component {

    constructor() {
        super();
        this.state = { done: false };
    }

    render() {
        var item = this.props.item;

        return (

            <li key={item}>

                <input type="checkbox"
                    onChange={this.props.handleDone.bind(this)}
                    checked={this.state.done}
                />  {item.text}
                <button className="delete" onClick={this.props.handleDelete.bind(this, item)}></button>
            </li>

        );
    }
}



ReactDOM.render(<TodoApp />, document.getElementById("todo"));