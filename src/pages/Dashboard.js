import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";
import PreOrder from "../components/dashboard/PreOrder";
import Service from "../components/dashboard/Service";
import PendingSettlement from "../components/dashboard/PendingSettlement";

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import Nav2 from "../components/common/Nav2";

function Dashboard() {
  const [subMenu, setSubMenu] = useState("Pre-Order");
  const message = useSelector((state) => state.messageReducer.message);
  const iconSize = 15;

  let dashboardData = {
    title1: "Pre-Order",
    title2: "Service",
    title3: "pending settlements",
    path1: "/lastOrders",
    path2: "/totalSales",
    path3: "/Maintainance",
    logo1: <TbTruckDelivery size={iconSize} color="black" />,
    logo2: <RiCustomerService2Fill size={iconSize} color="black" />,
    logo3: <MdPendingActions size={iconSize} color="black" />,
  };

  const handleSubSubMenu = (data) => {
    setSubMenu(data);
  };

  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1 col-4">
          <Navbar dashboardData={dashboardData} />
        </Col>
        <Col>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(dashboardData.title1)}
          >
            {dashboardData.logo1}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {dashboardData.title1}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(dashboardData.title2)}
          >
            {dashboardData.logo2}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {dashboardData.title2}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(dashboardData.title3)}
          >
            {dashboardData.logo3}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {dashboardData.title3}
            </small>
          </button>
        </Col>
        <Col className="col-6">
          <Nav2 />
        </Col>
      </Row>
      <Row className="border-top">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18">
          {subMenu && subMenu === "Pre-Order" ? <PreOrder /> : ""}
          {subMenu && subMenu === "Service" ? <Service /> : ""}
          {subMenu && subMenu === "pending settlements" ? (
            <PendingSettlement />
          ) : (
            ""
          )}
        </Col>
        <Col>
          <Rightsidemenu />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Dashboard;
