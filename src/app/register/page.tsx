"use client";

import { Login, SignUp } from "@components";
import { useState } from "react";
import Image from "next/image";
import { horse } from "@assets/images";

const page = () => {
  const [isLoginSellected, setIsLoginSellected] = useState(true);

  const handleLoginSelected = () => {
    setIsLoginSellected(true);
  };

  const handleSignUpSelected = () => {
    setIsLoginSellected(false);
  };

  return (
    <section className="flex h-[500px] justify-center">
      <div className="bg-slate-gray">
        <Image
          src={horse}
          alt="This is a horse image"
          className="object-contain h-full"
        />
      </div>
      <div className="flex flex-col gap-[3rem] items-center">
        <div>
          <h1 className="text-4xl font-palanquin font-bold">
            Welcome to Align Shop
          </h1>
        </div>
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
          <div>{isLoginSellected ? <Login /> : <SignUp />}</div>
        </section>
      </div>
    </section>
  );
};

export default page;
