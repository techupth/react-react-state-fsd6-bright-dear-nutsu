import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const greetingThai = () => {
    setGreeting("สวัสดี!");
  };
  const greetingEng = () => {
    setGreeting("Hi!");
  };
  const greetingChina = () => {
    setGreeting("你好!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={greetingThai}>สวัสดี!</button>
        <button onClick={greetingEng}>Hi!</button>
        <button onClick={greetingChina}>你好!</button>
      </div>
    </div>
  );
}

export default App;
