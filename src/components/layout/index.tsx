import React, { FunctionComponent } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}
const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
