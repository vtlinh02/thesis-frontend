import "../globals.css";
import { Nav } from "@components";
import { ReactNode } from "react";
import { UserProvider } from "@context/UserContext";

export const metadata = {
  title: "Thesis",
  description: "This is my Thesis Frontend",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="m-4">
        <UserProvider>
          <Nav />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
