import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/textInput";
import { TodoProvider } from "./context/TodoContext";
import Card from "./components/Cards";
import "./App.css";

function App() {
  return (
    <>
      <TodoProvider>
        <Header />
        <TextInput />
        <Card />
        <Footer />
      </TodoProvider>
    </>
  );
}

export default App;
