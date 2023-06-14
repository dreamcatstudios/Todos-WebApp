import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TextInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
    console.log(text);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        value={text}
        placeholder="Input your important tasks here..."
        onChange={onChange}
        className="w-[80%] border-2 border-black rounded-lg px-2 p-5 mt-5"
      />
      <button
        onClick={onSubmit}
        className="px-5 py-3 bg-black text-white rounded-lg mt-3"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TextInput;
