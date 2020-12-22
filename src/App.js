import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((data2) => setUsers(data2));
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <h2>This is Axios Practice Application</h2>
      <br />
      <table class="table table-sm table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody>
            <tr
              style={{ backgroundColor: index % 2 === 0 && "yellow" }}
              key={user.id}
            >
              <th scope="row">{user.id}</th>
              <td style={{ color: index % 2 === 0 && "black" }}>{user.name}</td>
              <td style={{ color: index % 2 === 0 && "black" }}>
                {user.username}
              </td>
              <td style={{ color: index % 2 === 0 && "black" }}>
                {user.email}
              </td>
              <td style={{ color: index % 2 === 0 && "black" }}>
                {user.phone}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
