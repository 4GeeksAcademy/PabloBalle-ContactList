import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router

export const Users = () => {
  const [users, setUsers] = useState();
  const host = "https://jsonplaceholder.typicode.com"

  const getUsers = async () => {
    if (localStorage.getItem("usersLocal") !== null) {
      setUsers(JSON.parse(localStorage.getItem("usersLocal")));
    } else {
      const response = await fetch(host + "/users");
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setUsers(data);
        localStorage.setItem("usersLocal", JSON.stringify(data));
      } else {
        console.log("error: ", response.status, response.statusText);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="container">List of Users</h1>
        {users &&
          users.map((user) => (
            // Use Link to wrap each list item and pass the user ID as a parameter
              <div className="card p-2 m-2 w-50" style={{ width: "18rem" }}>
                <div className="row align-items-center justify-content-center">
                  <div className="col">
                    <p>{user.name}</p>
                  </div>
                  <div className="col-auto">
                    <Link to={`/user/${user.id}`}>
                      <button className="btn btn-primary p-1">More details</button>
                    </Link>
                  </div>
                </div>
              </div>
          ))}
    </div>
  );
};