import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";
import PreOrder from "../components/dashboard/PreOrder";
import Service from "../components/dashboard/Service";
import PendingSettlement from "../components/dashboard/PendingSettlement";
import jwtDecode from "jwt-decode";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import Nav2 from "../components/common/Nav2";

function Dashboard() {
  //get local storage data
  let token = localStorage.getItem("auth")
    ? localStorage.getItem("auth")
    : "auth token not found in dashboard page";
  let decoded = jwtDecode(token)
    ? jwtDecode(token)
    : "can`t decode jwt in dashboard page";
  let dashboardTitle = decoded.bundle[0].subMenu
    ? decoded.bundle[0].subMenu
    : "can`t resolve dashboardTitle";

  const [subMenu, setSubMenu] = useState("Previous Orders");
  const [dashboardMenu, setDashboardMenu] = useState("");
  const message = useSelector((state) => state.messageReducer.message);
  const iconSize = 15;

  useEffect(() => {
    if (
      localStorage.getItem("dashboard") === undefined ||
      localStorage.getItem("dashboard") === null
    ) {
      console.log("local Storage value is null or undefined in Dashboard page");
    } else {
      let p = localStorage.getItem("dashboard");
      let z = JSON.parse(p);
      console.log(z);
      setDashboardMenu(z);
    }
  }, []);

  // button array
  let dashboardData = [
    {
      title: dashboardTitle[0].title ? dashboardTitle[0].title : "Pre-Order",
      path: "/lastOrders",
      logo: <TbTruckDelivery size={iconSize} color="black" />,
      showButton: true,
    },
    {
      title: dashboardTitle[1].title ? dashboardTitle[1].title : "Service",
      path: "/totalSales",
      logo: <RiCustomerService2Fill size={iconSize} color="black" />,
      showButton: dashboardMenu.ServiceDashChecked,
    },
    {
      title: dashboardTitle[2].title
        ? dashboardTitle[2].title
        : "pending settlements",
      path: "/Maintainance",
      logo: <MdPendingActions size={iconSize} color="black" />,
      showButton: dashboardMenu.pendingsettlementsChecked,
    },
  ];

  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1 col-4">
          <Navbar dashboardData={dashboardData} />
        </Col>
        <Col>
          {dashboardData &&
            dashboardData.map((i, index) => {
              if (i.showButton !== true) {
              } else {
                return (
                  <>
                    <button
                      key={index}
                      className="headerButton mx-2"
                      value="20"
                      onClick={() => setSubMenu(i.title)}
                    >
                      {i.logo}
                      <small className="text-black m-0 p-0 mx-1 mr-5">
                        {i.title}
                      </small>
                    </button>
                  </>
                );
              }
            })}
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
          {subMenu && subMenu === "Previous Orders" ? <PreOrder /> : ""}
          {subMenu && subMenu === "Total Sales" ? <Service /> : ""}
          {subMenu && subMenu === "Pending Settlements" ? (
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
