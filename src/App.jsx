import { useState } from 'react';
import './App.css';

function App() {
  const [greetingMessage, setGreetingMessage] = useState('Greeting Message');

  const handleClick = (message) => setGreetingMessage(message);

  // const messages = ['สวัสดี!', 'Hi!', '你好!'];

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        {/* Function Event Handler */}
        <button onClick={() => handleClick('สวัสดี!')}>สวัสดี!</button>
        <button onClick={() => handleClick('Hi!')}>Hi!</button>
        <button onClick={() => handleClick('你好!')}>你好!</button>

        {/* Anonymous Function  */}
        {/* <button onClick={() => setGreetingMessage('สวัสดี!')}>สวัสดี!</button>
        <button onClick={() => setGreetingMessage('Hi!')}>Hi!</button>
        <button onClick={() => setGreetingMessage('你好!')}>你好!</button> */}

        {/* Rendering List Items with Anonymous function  */}
        {/* {messages.map((message, index) => {
          return (
            <button key={index} onClick={() => setGreetingMessage(message)}>
              {message}
            </button>
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
