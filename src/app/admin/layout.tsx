import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Admin",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Layout;
