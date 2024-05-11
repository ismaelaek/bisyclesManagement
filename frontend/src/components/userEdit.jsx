import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserEdit() {
	let { id } = useParams();
	id = JSON.parse(atob(id));
	const user = JSON.parse(localStorage.getItem("user"));
    return (
        <main>
            <h1>UserId = {id }</h1>
        </main>
    );
}
