import React, { Component } from "react"
import { Link } from "react-router-dom";
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDone, removeAll, filter } from '../actions/todo_actions';

class TodoList extends Component {
  state = { searchString: this.props.searchString };

  changeText = evt => this.setState({ searchString: evt.target.value });

  handleSearch = () => this.props.filter(this.state.searchString)

  render() {
    return (
      <div>
        <div className="input-container">
          <input id="title"
            type="text"
            value={this.state.searchString}
            onChange={this.changeText} />
          <button className='donebtn' onClick={this.handleSearch}>Search</button>
        </div>
        <div id="todos-pane">
          <ul id="todos">
            {
              this.props.todos.map((todo, i) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onChangeDone={this.props.changeDone} />)
              )
            }
          </ul>
        </div>
        <div className="link">
          <Link className='linkbtn' to="/add">Add new todo</Link>
        </div>
        <div className="link">
          <button className='donebtn'
            disabled={this.props.todos.length === 0}
            onClick={this.props.removeAll}>Remove all</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => state.filter === '' ? todo : todo.text.includes(state.filter)),
  searchString: state.filter
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { changeDone, removeAll, filter },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);