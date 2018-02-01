
class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = { text: '', items: [] };
    }

    handleDelete(itemToBeDeleted) {

        // console.log(itemToBeDeleted);  
        var newItems = this.state.items.filter((item) => {
            return item != itemToBeDeleted
        });
        this.setState({ items: newItems });
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();

        var prevItem = { text: this.state.text };
        var newItems = this.state.items.concat(prevItem);

        this.setState({ text: '', items: newItems });

    }

    render() {
        return (
            <div>
                <h1 className="header">Todo-List</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <input className="additems" placeholder="Add your list here" onChange={this.handleChange.bind(this)}
                        value={this.state.text} />
                </form>

                <TodoList handleDelete={this.handleDelete.bind(this)} items={this.state.items}
                />
            </div>
        );
    }

}

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = { done: false};
    }
    handleOnChange(){
        var done = !this.state.done;
        this.setState({done: done});
    }
    render() {
        return (
            <div>

                <ul className="list">
                    {this.props.items.map((item, index) => (
                        <li key={index}><input type="checkbox" onChange={this.handleOnChange.bind(this)} checked={this.state.done}/>{item.text}
                            <button className="delete" onClick={this.props.handleDelete.bind(this, item)}></button></li>
                    ))}
                </ul>

            </div>
        );
    }


}



ReactDOM.render(<TodoApp />, document.getElementById("todo"));