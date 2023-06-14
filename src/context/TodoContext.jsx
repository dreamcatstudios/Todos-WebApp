import { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodos = (index) => {
    setTodos(
      todos.filter((_, i) => {
        return i !== index;
      })
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
