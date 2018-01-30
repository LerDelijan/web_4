import reducer from './todos';

describe('todos', () => {
    test('returns [] by default', () => {
        const action = {
            type: null
        };
        const newState = reducer([], action);

        expect(newState).toEqual([]);
    });
});

describe('todos', () => {
    test('add todo', () => {
        const todoText = "Test todo"
        const action = {
            type: 'ADD_TODO',
            text: todoText,
            done: false,
            time: (new Date()).toString(),
            starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
            donetime: ''
        };
        const newState = reducer([], action);

        expect(newState).toEqual([{
            id: 1,
            text: todoText,
            done: false,
            time: (new Date()).toString(),
            starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
            donetime: ''
        }]);
    });
});

describe('todos', () => {
    test('change todo priority', () => {
        const action = {
            type: 'CHANGE_DONE',
            id: 1
        };
        const newState = reducer([{
            id: 1,
            text: "Test todo",
            done: false,
            time: (new Date()).toString(),
            starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
            donetime: ''
        }], action);

        expect(newState[0].done).toBeTruthy()
    });
});

describe('todos', () => {
    test('remove all todos', () => {
        const action = {
            type: 'REMOVE_ALL'
        };
        const newState = reducer([{
                id: 1,
                text: "Test todo 1",
                done: false,
                time: (new Date()).toString(),
                starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
                donetime: ''
            },
            {
                id: 2,
                text: "Test todo 2",
                done: false,
                time: (new Date()).toString(),
                starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
                donetime: ''
            }
        ], action);

        expect(newState).toEqual([]);
    });
});