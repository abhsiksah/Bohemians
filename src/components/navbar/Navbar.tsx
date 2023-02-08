import React, { useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import "./style.css";
import NavBarPopOver from "./NavbarMenu/NavBarPopOver";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-main-conatiner">
      <div className="lefty-navbar">Bohemains</div>
      <div className="righty-navbar">
        <Popover
          trigger={"click"}
          placement={"bottomRight"}
          content={<NavBarPopOver setOpen={setOpen} />}
          open={open}
          onOpenChange={() => setOpen(!open)}
        >
          <BarsOutlined />
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
