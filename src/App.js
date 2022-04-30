import {useState} from 'react';
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
    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;
