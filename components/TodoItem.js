import React, { Component } from 'react';

class TodoItem extends Component {

    handleChange = () => {
        console.log(this.props.todo.id);
        this.props.onChangeDone(this.props.todo.id);
    }

    isDone = () => this.props.todo.done;

    render() {
        return (
            <li>
                <button className='donebtn' onClick={this.handleChange}>Done</button>
                <span className={this.isDone() ? 'done' : ''}>{this.props.todo.text}</span>
                <div className='time'>{this.props.todo.starttime}</div>
                <div className='donetime'>{this.props.todo.donetime}</div>
            </li>
        );
    }
}

export default TodoItem;