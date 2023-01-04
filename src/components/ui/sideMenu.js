import React, { useState } from "react";
import { Button, ButtonGroup, OverlayTrigger } from "react-bootstrap";
import {
  CiBarcode,
  CiBatteryCharging,
  CiCircleList,
  CiGrid31,
  CiSettings,
  CiUnlock,
  CiUser,
  CiViewTimeline,
} from "react-icons/ci";
import { Link } from "react-router-dom";
import { isUser } from "../localStore/getCurrentUser";
function SideMenu() {
  const [currentUser, setCurrentUser] = useState();
  const findUser = isUser();

  return (
    <ButtonGroup vertical className="p-1">
      <div className="p-0 m-0 menuIcon">
        <CiGrid31 size={25} className="my-2" />
      </div>

      <Link to="/sales">
        <div className="p-0 m-0 menuIcon">
          <CiCircleList size={25} className="my-2" />
        </div>
      </Link>

      <Link to="/items">
        <div className="p-0 m-0 menuIcon">
          <CiBarcode size={25} className="my-2" />
        </div>
      </Link>

      <Link to="/inventory">
        <div className="p-0 m-0 menuIcon">
          <CiBatteryCharging size={25} className="my-2" />
        </div>
      </Link>

      <div className="p-0 m-0 menuIcon">
        <CiUnlock size={25} className="my-2" />
      </div>

      <div className="p-0 m-0 menuIcon">
        <CiUser size={25} className="my-2" />
      </div>

      <Link to="/masters">
        <div className="p-0 m-0 menuIcon">
          <CiSettings size={25} className="my-2" />
        </div>
      </Link>
    </ButtonGroup>
  );
}

export default SideMenu;
