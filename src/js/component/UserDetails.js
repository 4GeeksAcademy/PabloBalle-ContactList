// Target view component
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import { Link } from "react-router-dom";

export const UserDetails = () => {
  const [user, setUser] = useState(null);
  const host = "https://jsonplaceholder.typicode.com";
  const { userId } = useParams(); // Access the "userId" parameter from the URL

  const getUserDetails = async () => {
    const response = await fetch(`${host}/users/${userId}`);
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    } else {
      console.log("error: ", response.status, response.statusText);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [userId]);

  return (
    <div>
      {user ? (
        <div className="container">
          <h1>User Details</h1>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <p>Company: {user.company.name}</p>
          <Link to="/users">
				    <button className="btn btn-primary">Back to users</button>
			    </Link>
        </div>          

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
