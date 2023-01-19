import "./App.css";
import { useState } from "react";

import Block from "./Block";
// You have to take one input from the user, let’s say n (an integer), and the task is to design a n*n chess board, just the ui part of it, nothing functional, it should be n*n and it should be black and white alternating squares
function App() {
  const [arr, setArr] = useState([]);
  // const [color, setColor] = useState(true);

  function inputHandler(event) {
    let arr = [];
    for (let i = 0; i < event.target.value; i++) {
      arr.push(1);
    }
    console.log(arr);
    setArr(arr);
  }

  return (
    <div className="App">
      <input onChange={inputHandler} type="number" />
      <div className="board">
        <table>
          {arr &&
            arr.map((item, idx) => {
              return (
                <tr>
                  {arr.map((item, index) => {
                    return (
                      <td>
                        <Block outerIndex={idx} innerIndex={index} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default App;
