import { useEffect, useRef, useState } from "react";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";

const local_storage_key = "todoApp.todos";

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(local_storage_key);
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })
  const todoNameRef = useRef();

  useEffect(() => {
    const sotredTodos = JSON.parse(localStorage.getItem(local_storage_key))
    setTodos(sotredTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(todos))
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
