import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";
import PreOrder from "../components/dashboard/PreOrder";
import Service from "../components/dashboard/Service";
import PendingSettlement from "../components/dashboard/PendingSettlement";

function Dashboard() {
  const message = useSelector((state) => state.messageReducer.message);
  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1">
          <Navbar />
        </Col>
      </Row>
      <Row className="border-top">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18">
          {message && message === "Pre-Order" ? <PreOrder /> : ""}
          {message && message === "Service" ? <Service /> : ""}
          {message && message === "pending settlements" ? (
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
