import React, { Component } from "react"
import { connect } from 'react-redux';

class TodoCounter extends Component {
    render() {
        if (this.props.count === 0) {
            return "";
        }
        return (
            <div id="link">
                <span id="counter">
                    <p>{this.props.text !== undefined ? this.props.text : 'Todo count'}: {this.props.todos.length}</p>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoCounter);