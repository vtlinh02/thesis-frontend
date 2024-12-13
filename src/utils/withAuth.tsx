"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@context/UserContext";

export function withAuth(WrappedComponent: React.ComponentType) {
  const functionReturn = (props: any) => {
    const [isTokenValid, setIsTokenValid] = useState(false);
    const router = useRouter();
    const { setUser } = useUser();

    useEffect(() => {
      const handler = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/register");
        }

        const response = await fetch(
          "http://localhost:8000/auth/validate-token",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          localStorage.removeItem("token");
          router.push("/register");
        } else {
          // update the user information in React State
          const result = await response.json();
          setUser({ id: result.data.id, username: result.data.username });
          setIsTokenValid(true);
        }
      };
      handler();
    }, []);
    if (isTokenValid) return <WrappedComponent {...props} />;
    else
      return (
        <div className="font-palanquin text-[4rem] text-red-700 font-bold text-center">
          Invalid Token
        </div>
      );
  };
  return functionReturn;
}
