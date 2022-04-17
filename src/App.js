import { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState({
    username: "example",
    email: "example",
    password: "example"
  });

  const hanleChange = (e) => {
    setOutput({
      ...output,
      [e.target.id]: e.target.value
    });
  };

  console.log(output);

  return (
    <div className="App">
      <h1>Example ReactJs</h1>
      <h2>Edit array in react hooks</h2>

      <div className="row">
        <div className="column">
          <h3>Input </h3>
          <div className="row">
            <div className="column to-left" style={{ width: "100px" }}>
              username <br />
              email <br />
              password <br />
            </div>
            <div className="column to-left">
              <input type="text" id="username" onChange={hanleChange} />
              <input type="email" id="email" onChange={hanleChange} />
              <input type="password" id="password" onChange={hanleChange} />
            </div>
          </div>
        </div>
        <div className="column">
          <h3>Output </h3>
          <div className="row">
            <div className="column to-left" style={{ width: "100px" }}>
              username <br />
              email <br />
              password <br />
            </div>
            <div className="column to-left">
              <input
                type="text"
                id="username"
                value={output.username}
                readOnly
              />
              <input type="email" id="email" value={output.email} readOnly />
              <input
                type="text"
                id="password"
                value={output.password}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
