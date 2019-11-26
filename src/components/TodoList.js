import React, { Component } from "react";
import "../styles/TodoList.css";
import { uuid } from "uuidv4";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: ""
    };
  }
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  addItem = e => {
    e.preventDefault();
    const key = uuid();
    const item = { task: this.state.inputValue, itemKey: key };
    this.setState({
      items: [...this.state.items, item],
      inputValue: ""
    });
  };
  removeItem = itemKey => {
    const filteredItems = this.state.items.filter(item => {
      return item.itemKey !== itemKey;
    });
    this.setState({
      items: filteredItems
    });
  };
  renderToDoItems = () => {
    return this.state.items.map(item => {
      return (
        <TodoItem {...item} key={item.itemKey} removeItem={this.removeItem} />
      );
    });
  };
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="enter task"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">add</button>
          </form>
        </div>
        {this.renderToDoItems()}
      </div>
    );
  }
}

export default TodoList;
