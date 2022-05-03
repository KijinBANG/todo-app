import {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
    const array = [];
    for (let i=1; i<=2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

const App = () => {
    const [todos, setTodos] = useState(
    // [
        // {
        //     id: 1,
        //     text: 'fundamental issues about REACT',
        //     checked: true,
        // },
        // {
        //     id: 2,
        //     text: 'try to style components',
        //     checked: true,
        // },
        // {
        //     id: 3,
        //     text: 'try to make todo-app',
        //     checked: false,
        // },
    // ]
        createBulkTodos
    );

    //고윳값으로 사용될 id
    //ref 를 사용하여 변수 담기
    // const nextId = useRef(4);
    const nextId = useRef(2501);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1 // nextId 1씩 더하기
        },
        [todos],
    );

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? {...todo, checked: !todo.checked} : todo,
                ),
            );
        },
        [todos],
    )

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
}

export default App;
