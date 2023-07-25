import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<Link to="/users">
			<button className="btn btn-primary">View users</button>
		</Link>
	</div>
);
