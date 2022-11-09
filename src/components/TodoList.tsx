import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {error, todos, limit, loading, page} = useTypedSelector(state => state.todo)
    const {fetchTodos} = useActions();
    const {setTodoPage} = useActions();
    const pages = [1,2,3,4,5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

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
            <div style={{marginTop: 20}}>
                    {pages.map(p =>
                        <span onClick={() => setTodoPage(p)} style={{border: p === page ? '2px solid teal' : '1px solid gray', padding: 10}}
                        >
                            {p}
                        </span>
                    )}
            </div>
        </div>
    );
};

export default TodoList;