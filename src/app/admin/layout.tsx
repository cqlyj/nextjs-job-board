import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import AdminNavbar from "./jobs/[slug]/AdminNavbar";

export const metadata = {
  title: "Admin",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <AdminNavbar></AdminNavbar>
      {children}
    </ClerkProvider>
  );
};

export default Layout;
