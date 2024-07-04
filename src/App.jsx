import "./App.css";
import { useState } from "react";
function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const changeGreeting = (language) => {
    if (language === "thai") {
      setGreeting("สวัสดี!");
    } else if (language === "english") {
      setGreeting("Hi!");
    } else if (language === "chinese") {
      setGreeting("你好!");
    }
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => changeGreeting("thai")}>สวัสดี!</button>
        <button onClick={() => changeGreeting("english")}>Hi!</button>
        <button onClick={() => changeGreeting("chinese")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
