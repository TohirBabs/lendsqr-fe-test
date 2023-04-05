import React from "react";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

type Props = {
  children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  const [menu, setMenu] = React.useState("");
  return (
    <div className="layout">
      <Header setMenu={setMenu} />
      <main className="layout__body">
        <SideNav setMenu={setMenu} menu={menu} />
        {children}
      </main>
    </div>
  );
};
