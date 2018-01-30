import alertify from 'alertify.js'

const initialState = [];

var todoNextId = 0;

export default function todos(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case 'ADD_TODO':
            if (action.text.trim() === '') {
                alertify.alert('First you need to enter the text of the task!');
                return state;
            }
            for (let i = 0; i < state.length; i++) {
                if (state[i].text.trim() === action.text) {
                    alertify.alert("You have already added such a task!");
                    return state;
                }
            }
            return [
                ...state,
                {
                    id: ++todoNextId,
                    text: action.text.trim(),
                    done: false,
                    time: (new Date()).toString(),
                    starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
                    donetime: ''
                }
            ];
        case 'CHANGE_DONE':
            return state.map(todo => {
                if (todo.id === action.id)  {
                    return {
                        ...todo,
                        done: !todo.done,
                        time: todo.time,
                        starttime: todo.starttime,
                        donetime: (new Date() - new Date(todo.time)) / 1000
                    }
                } else {
                    return todo
                }
            });
        case 'REMOVE_ALL':
            return initialState;
        default:
            return state;
    }
};