import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Rightsidemenu from "../components/common/Rightsidemenu";
import SideMenu from "../components/ui/sideMenu";
import Nav2 from "../components/common/Nav2";
import Credit from "../components/account/Credit";
import Debit from "../components/account/Debit";
import Report from "../components/account/Report";
import SettleBill from "../components/account/SettleBill";
import Transaction from "../components/account/Transaction";

import { TbReportAnalytics } from "react-icons/tb";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";

function Dashboard() {
  const [subMenu, setSubMenu] = useState("Settle Bill");
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

  const handleSubSubMenu = (data) => {
    setSubMenu(data);
  };
  // let data = localStorage.getItem("data");
  // console.log(data);
  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1 col-3">
          <Navbar />
        </Col>
        <Col className="float-start col-15">
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(accountsData.title1)}
          >
            {accountsData.logo1}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {accountsData.title1}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(accountsData.title2)}
          >
            {accountsData.logo2}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {accountsData.title2}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(accountsData.title3)}
          >
            {accountsData.logo3}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {accountsData.title3}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(accountsData.title4)}
          >
            {accountsData.logo4}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {accountsData.title4}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(accountsData.title5)}
          >
            {accountsData.logo5}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {accountsData.title5}
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
          {subMenu && subMenu === "Settle Bill" ? <SettleBill /> : ""}
          {subMenu && subMenu === "Transaction" ? <Transaction /> : ""}
          {subMenu && subMenu === "Credit" ? <Credit /> : ""}
          {subMenu && subMenu === "Debit" ? <Debit /> : ""}
          {subMenu && subMenu === "Report" ? <Report /> : ""}
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
