"use client";

import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface User {
  id: number;
  username: string;
}

interface userContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<userContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (user: User | null) => {
    setUserState(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  useEffect(() => {
    if (!user) {
      const user = localStorage.getItem("user");
      if (user) {
        setUserState(JSON.parse(user));
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Context not found, need to wrap to UserProvider");
  }
  return context;
};
