import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  // Fix the state variable name to setConsoleMessage
  const [consoleMessage, setConsoleMessage] = useState([]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleReset = () => {
    setCounter(0);
  }

  useEffect(() => {
    console.log(`Counter value has been changed: ${counter}`);
    console.log(consoleMessage);
    // Fix the state updater function to setConsoleMessage
    setConsoleMessage((prevMessages) => [...prevMessages, `Counter value changed: ${counter}`]);
  }, [counter]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Simple Counter App</h1>
          <p>Counter: {counter}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleReset}>Reset</button>
          <div>
            <h2>Console Messages:</h2>
            <ul>
              {consoleMessage.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}


export default App;
