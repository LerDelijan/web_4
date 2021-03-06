import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/todo_actions';

class TodoInput extends Component {
    state = { value: '' };

    disabled = () => this.props.todos.length >= 10;

    changeText = evt => this.setState({ value: evt.target.value });
    
    handleAdd = () => {
        this.props.addTodo(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input id="title" 
                        type="text" 
                        disabled={this.disabled()}
                        value={this.state.value} 
                        onChange={this.changeText}/>
                    <button 
                        disabled={this.disabled()}
                        className='donebtn' 
                        onClick={this.handleAdd}>Add</button>
                </div>
                <div className='link'>
                    <Link className='nav-link' to="/">Go to list</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { addTodo },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);