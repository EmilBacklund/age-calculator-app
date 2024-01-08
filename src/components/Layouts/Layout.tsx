import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <main className="h-screen grid place-items-center font-poppins">{children}</main>;
};

export default Layout;
