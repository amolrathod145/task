import React, { useState } from "react";

export default function Home() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setFirst(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSecond([...second, first]);
    setFirst("");
  };
  const handleToggle = () => {
    setToggle(!toggle);
    setSecond([]);
    // toggle ? "" : ""
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div>
                <form onSubmit={handleSubmit}>
                  <input type="text" onChange={handleChange} />
                  <button>add data</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <table border={"2px solid red"}>
                <thead>
                  <tr>
                    <th> Name</th>
                    <th>yes</th>
                    <th>no</th>
                  </tr>
                </thead>
                <tbody>
                  {second.map((item) => (
                    <tr>
                      <td>{item}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={handleToggle}
                        >
                          Yes
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger">No</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
