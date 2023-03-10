import React, { useEffect, useState } from "react";
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
import jwtDecode from "jwt-decode";

import { TbReportAnalytics } from "react-icons/tb";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";

function Dashboard() {
  const [accountMenu, setAccountMenu] = useState("");
  const [subMenu, setSubMenu] = useState("Settle Bills");

  let token = localStorage.getItem("auth")
    ? localStorage.getItem("auth")
    : "auth token not found in account page";
  let decoded = jwtDecode(token)
    ? jwtDecode(token)
    : "can`t decode jwt in account page";
  let accountitle = decoded.bundle[5].subMenu
    ? decoded.bundle[5].subMenu
    : "can`t resolve accountTitle";

  useEffect(() => {
    if (
      localStorage.getItem("account") === undefined ||
      localStorage.getItem("account") === null
    ) {
      console.log("token undefined or null in account page");
    } else {
      let p = localStorage.getItem("account");
      let z = JSON.parse(p);
      setAccountMenu(z);
    }
  }, []);

  const iconSixe = 15;
  //button Array
  let accountsData = [
    {
      title: accountitle[0].title ? accountitle[0].title : "Settle Bill",
      path: "/lastOrders",
      logo: <RiBillFill size={iconSixe} color="black" />,
      showButton: true,
    },
    {
      title: accountitle[1].title ? accountitle[1].title : "Transaction",
      path: "/totalSales",
      logo: <AiOutlineTransaction size={iconSixe} color="black" />,
      showButton: accountMenu.transactionChecked,
    },
    {
      title: accountitle[2].title ? accountitle[2].title : "Credit",
      path: "/Maintainance",
      logo: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
      showButton: accountMenu.creditChecked,
    },
    {
      title: accountitle[3].title ? accountitle[3].title : "Debit",
      path: "/lastOrders",
      logo: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
      showButton: accountMenu.debitChecked,
    },
    {
      title: accountitle[4].title ? accountitle[4].title : "Report",
      path: "/lastOrders",
      logo: <TbReportAnalytics size={iconSixe} color="black" />,
      showButton: accountMenu.reportChecked,
    },
  ];

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
          {subMenu && subMenu === "Settle Bills" ? <SettleBill /> : ""}
          {subMenu && subMenu === "Transactions" ? <Transaction /> : ""}
          {subMenu && subMenu === "Credits" ? <Credit /> : ""}
          {subMenu && subMenu === "Debits" ? <Debit /> : ""}
          {subMenu && subMenu === "Reports" ? <Report /> : ""}
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
