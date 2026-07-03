import React, { useState } from "react";
import './App.css';

function App() {
    const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

function appendValue(value){
     if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
}

function clearDisplay(){
   setDisplay("0");
}

function deleteLast(){
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
}

function calculate(){
    try{
        const expression = display.replace(/÷/g, "/");
      const result = eval(expression).toString();

      setHistory([`${display} = ${result}`, ...history]);
      setDisplay(result);
    }
    catch{
        setDisplay("Error");
    }
}

function toggleHistory(){
     setShowHistory(!showHistory);
}
  return (
    <div className="calculator">

    <div className="top-bar">
        <span className="menu">☰</span>
        <h2>Standard</h2>
        <span className="history-btn" onClick={toggleHistory}>🕒</span>
    </div>

    <div className="display">{display}</div>

    <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={deleteLast}>⌫</button>
        <button onClick={() => appendValue("%")}>%</button>
        <button onClick={() => appendValue("÷")}>÷</button>

        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("*")}>*</button>

        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("-")}>-</button>

        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("+")}>+</button>

        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={() => appendValue(".")}>.</button>
        <button className="equal" onClick={calculate}>=</button>
    </div>

{showHistory && (
  <div className="history-panel">
    <h3>History</h3>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)}
</div>
  );
}

export default App;
