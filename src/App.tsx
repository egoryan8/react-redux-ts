import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      Приложение на React Redux TypeScript
        <UserList/>
        <TodoList/>
    </div>
  );
}

export default App;
