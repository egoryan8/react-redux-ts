import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const {error, todos, limit, loading, page} = useTypedSelector(state => state.todo)

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <h2>Список дел:</h2>
            {todos.map(todo => <div key={todo.id}>{todo.id}. {todo.title}</div>)}
        </div>
    );
};

export default TodoList;