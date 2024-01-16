import React, { useState } from "react";
import "./signUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="title">
        <div className="title">Welcome to Streaming App, Sign Up below.</div>
      </div>
      <div className="card">
        <div>
          Username:{" "}
          <input
            id="username"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}></input>
          <br></br>
          <br></br>
          Password:{" "}
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
          <br></br>
          <br></br>
          <button
            onClick={() => {
              fetch("http://localhost:3001/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username,
                  password,
                }),
              })
                .then((res) => {
                  if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                  }
                  return res.json();
                })
                .then((data) => {
                  localStorage.setItem("token", data.token);
                  window.location = "/feed";
                })
                .catch((error) => {
                  console.error("Error during sign-up:", error);
                });
            }}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;