import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";
import Nav2 from "../components/common/Nav2";
import Customer from "../components/HRM/Customer";
import Staff from "../components/HRM/Staff";
import Supplier from "../components/HRM/Supplier";
import jwtDecode from "jwt-decode";

import { RiTeamFill } from "react-icons/ri";
import { FaTruckMoving } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
function Dashboard() {
  const [submenu, setSubMenu] = useState("Customer");
  const [hrmMenu, setHrmMenu] = useState("");
  const iconSixe = 15;

  let token = localStorage.getItem("auth")
    ? localStorage.getItem("auth")
    : "auth token not found in HRM page";
  let decoded = jwtDecode(token)
    ? jwtDecode(token)
    : "can`t decode jwt in HRM page";
  let HRMTitle = decoded.bundle[4].subMenu
    ? decoded.bundle[4].subMenu
    : "can`t resolve HRMTitle";
  console.log(HRMTitle);

  useEffect(() => {
    if (
      localStorage.getItem("HRM") === undefined ||
      localStorage.getItem("HRM") === null
    ) {
      console.log("local storage value is undefined or null in HRM page");
    } else {
      let p = localStorage.getItem("HRM");
      let z = JSON.parse(p);
      setHrmMenu(z);
    }
  }, []);

  let hrmData = [
    {
      title: HRMTitle[0].title ? HRMTitle[0].title : "Customer",
      path: "/lastOrders",
      logo: <ImProfile size={iconSixe} color="black" />,
      showButton: true,
    },
    {
      title: HRMTitle[1].title ? HRMTitle[1].title : "Supplier",
      path: "/totalSales",
      logo: <FaTruckMoving size={iconSixe} color="black" />,
      showButton: hrmMenu.SupplierChecked,
    },
    {
      title: HRMTitle[2].title ? HRMTitle[2].title : "Staff",
      path: "/Maintainance",
      logo: <RiTeamFill size={iconSixe} color="black" />,
      showButton: hrmMenu.StaffChecked,
    },
  ];
  const handleSubSubMenu = (data) => {
    setSubMenu(data);
  };
  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1 col-4">
          <Navbar />
        </Col>
        <Col>
          {hrmData &&
            hrmData.map((i, index) => {
              if (i.showButton !== true) {
              } else {
                return (
                  <>
                    <button
                      key={index}
                      className="headerButton mx-2"
                      value="20"
                      onClick={() => handleSubSubMenu(i.title)}
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
          {submenu && submenu === "Customer" ? <Customer /> : ""}
          {submenu && submenu === "Supplier" ? <Supplier /> : ""}
          {submenu && submenu === "Staff" ? <Staff /> : ""}
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
