"use client";

import { useContext, createContext, ReactNode, useState } from "react";

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
  const [user, setUser] = useState<User | null>(null);

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
