import {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'fundamental issues about REACT',
            checked: true,
        },
        {
            id: 2,
            text: 'try to style components',
            checked: true,
        },
        {
            id: 3,
            text: 'try to make todo-app',
            checked: false,
        },
    ]);

    //고윳값으로 사용될 id
    //ref 를 사용하여 변수 담기
    const nextId = useRef(4);

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

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;
