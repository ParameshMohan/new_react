import React from "react";
import Drawer_TopNav from "./drawer_TopNav";
import Inbox1 from "./stock/inbox1";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Drawer_TopNav>
        <main>
          <div className="container-fluid">{children}</div>
        </main>
      </Drawer_TopNav>
    </div>
  );
};

export default AppLayout;
