import React, { useState } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    notifyServer();
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    notifyServer();
  };

  // Notifies the server about the change
  const notifyServer = () => {
    axios.post('./count', {
        message: 'Counter Updated!',
    })
}

  return (
    <div>
        <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React Component - 2</div>
                        <button onClick={handleDecrement}>-</button>
                        <span> {count} </span>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </div>
    </div>
  );
}

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}