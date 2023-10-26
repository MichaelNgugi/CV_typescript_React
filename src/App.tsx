import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Message />
      </div>
      <div className="card"></div>
      <br></br>
      <div>
        <ListGroup />
      </div>
    </div>
  );
}

export default App;
