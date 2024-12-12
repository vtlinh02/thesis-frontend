"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/auth/sign-up", {
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
      const result: any = await response.json();
      const token = result.data.token;
      localStorage.setItem("token", token);

      router.push("/");
    } else {
      setError("Wrong username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        value={formData.username}
        placeholder="Input your username"
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        className="text-3xl font-palanquin text-center border-x-2 border-b-2 border-black py-4"
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
        className="text-3xl font-palanquin text-center border-x-2 border-black py-4"
      />
      <button
        type="submit"
        className="text-3xl font-bold font-palanquin py-4 border-2 border-black hover:bg-green-500"
      >
        Login
      </button>
      <p className="text-2xl font-montserrat text-red-600 text-center">
        {error !== "" ? error : undefined}
      </p>
    </form>
  );
};

export default SignUp;
