"use client";

import Feed from "../../components/Feed";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@context/UserContext";

const Home = () => {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    const handle = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/register");
      } else {
        const response = await fetch(
          "http://localhost:8000/auth/validate-token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }
        );
        if (!response.ok) {
          localStorage.removeItem("token");
          router.push("/register");
        } else {
          const result: any = await response.json();
          setUser({ id: result.data.id, username: result.data.username });
        }
      }
    };
    handle();
  }, []);
  return (
    <section className="pt-8">
      <Feed />
    </section>
  );
};

export default Home;
