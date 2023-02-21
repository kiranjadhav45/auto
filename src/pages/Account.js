import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";

import { TbReportAnalytics } from "react-icons/tb";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";

function Dashboard() {
  const iconSixe = 15;
  let accountsData = {
    title1: "Settle Bill",
    title2: "Transaction",
    title3: "Credit",
    title4: "Debit",
    title5: "Report",
    path1: "/lastOrders",
    path2: "/totalSales",
    path3: "/Maintainance",
    logo1: <RiBillFill size={iconSixe} color="black" />,
    logo2: <AiOutlineTransaction size={iconSixe} color="black" />,
    logo3: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
    logo4: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
    logo5: <TbReportAnalytics size={iconSixe} color="black" />,
  };

  // let data = localStorage.getItem("data");
  // console.log(data);
  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1">
          <Navbar accountsData={accountsData} />
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
