import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";

import { RiTeamFill } from "react-icons/ri";
import { FaTruckMoving } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
function Dashboard() {
  const iconSixe = 15;
  let hrmData = {
    title1: "Customer",
    title2: "Supplier",
    title3: "Staff",
    path1: "/lastOrders",
    path2: "/totalSales",
    path3: "/Maintainance",
    logo1: <ImProfile size={iconSixe} color="black" />,
    logo2: <FaTruckMoving size={iconSixe} color="black" />,
    logo3: <RiTeamFill size={iconSixe} color="black" />,
  };

  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1">
          <Navbar hrmData={hrmData} />
        </Col>
      </Row>
      <Row className="border-top">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18"></Col>
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
