import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Card() {
  const { todos, removeTodos } = useContext(TodoContext);

  const handleRemove = (index) => {
    removeTodos(index);
  };

  return (
    <div className="sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-2 pt-3 w-[100%]">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg shadow-lg bg-gray-100 p-5 sm:p-3 sm:w-[50%] md:w-[100%]  md:mt-5 sm:mt-6  m-5 items-center justify-center"
        >
          <p className="text-black text-xl break-words sm:text-lg">{todo}</p>
          <div>
            <button
              class="px-5 py-3 mt-5 rounded bg-black text-white"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
