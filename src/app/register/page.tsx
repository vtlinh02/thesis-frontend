"use client";

import { Login, SignUp } from "@components";
import { useState } from "react";

const page = () => {
  const [isLoginSellected, setIsLoginSellected] = useState(true);

  const handleLoginSelected = () => {
    setIsLoginSellected(true);
  };

  const handleSignUpSelected = () => {
    setIsLoginSellected(false);
  };

  return (
    <div className="flex justify-center">
      <section className="flex flex-col w-1/2">
        <div className="flex border-2 border-black">
          <button
            className={`w-1/2 text-4xl font-palanquin text-center border-r-2 border-black py-2 ${
              isLoginSellected ? "bg-green-500" : null
            }`}
            onClick={handleLoginSelected}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-4xl font-palanquin text-center py-2 ${
              isLoginSellected ? null : "bg-green-500"
            }`}
            onClick={handleSignUpSelected}
          >
            Sign up
          </button>
        </div>
        <div className="border-x-2 border-b-2 border-black">
          {isLoginSellected ? <Login /> : <SignUp />}
        </div>
      </section>
    </div>
  );
};

export default page;
