class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {
        return (
            <div>
                <h1 className="header">Todo-List</h1>

                <form action="" onSubmit={this.handleSubmit}>
                    <input placeholder="Add your list here" onChange={this.handleChange}
                        value={this.state.text} />
                </form>

                <TodoList items={this.state.items}
                />
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul  className="list">
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.text} </li>
                    ))}
                </ul>
            </div>
        );
    }

}



ReactDOM.render(<TodoApp />, document.getElementById("todo"));