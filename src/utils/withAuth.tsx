import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function withAuth(WrappedComponent: React.ComponentType) {
  const functionReturn = (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const handler = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/register");
        }

        const response = await fetch(
          "http://localhost:8000/auth/validate-token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
            }),
          }
        );

        if (!response.ok) {
          localStorage.removeItem("token");
          router.push("/register");
        } else {
          // update the user information in React State
        }
      };
      handler();
    }, []);
    return <WrappedComponent {...props} />;
  };
  return functionReturn;
}
