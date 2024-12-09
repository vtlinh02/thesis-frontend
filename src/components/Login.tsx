"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      const token = result.data.token;
      localStorage.setItem("token", token);

      router.push("/");
    } else {
      setError("Wrong username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.username}
        placeholder="Input your username"
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        required
      />
      <input
        type="text"
        placeholder="Input your password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
        required
      />
      {error != "" ? <p>{error}</p> : undefined}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
