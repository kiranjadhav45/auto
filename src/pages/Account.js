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

let p = localStorage.getItem("account");
let accountMenu = JSON.parse(p);

function Dashboard() {
  const [subMenu, setSubMenu] = useState("Settle Bill");
  const iconSixe = 15;
  let accountsData = [
    {
      title: "Settle Bill",
      path: "/lastOrders",
      logo: <RiBillFill size={iconSixe} color="black" />,
      showButton: true,
    },
    {
      title: "Transaction",
      path: "/totalSales",
      logo: <AiOutlineTransaction size={iconSixe} color="black" />,
      showButton: accountMenu.transactionChecked,
    },
    {
      title: "Credit",
      path: "/Maintainance",
      logo: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
      showButton: accountMenu.creditChecked,
    },
    {
      title: "Debit",
      path: "/lastOrders",
      logo: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
      showButton: accountMenu.debitChecked,
    },
    {
      title: "Report",
      path: "/lastOrders",
      logo: <TbReportAnalytics size={iconSixe} color="black" />,
      showButton: accountMenu.reportChecked,
    },
  ];

  const handleSubSubMenu = (data) => {
    setSubMenu(data);
  };

  return (
    <Container fluid className="bg-white font-ubu">
      <Row>
        <Col className="mt-1 col-3">
          <Navbar />
        </Col>
        <Col className="float-start col-15">
          {accountsData &&
            accountsData.map((i, index) => {
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
