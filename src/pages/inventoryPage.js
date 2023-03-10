import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
  NavDropdown,
  ListGroup,
} from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import {
  CiBatteryCharging,
  CiBellOn,
  CiCircleList,
  CiExport,
  CiFilter,
  CiGrid31,
  CiImport,
  CiPlay1,
  CiSearch,
  CiSettings,
  CiSquarePlus,
  CiStar,
  CiTrophy,
  CiUnlock,
  CiUser,
  CiViewTimeline,
} from "react-icons/ci";
import { BiTrendingUp } from "react-icons/bi";
import { FcExpired } from "react-icons/fc";
import { TbTruckReturn } from "react-icons/tb";
import { HiArrowSmDown } from "react-icons/hi";
import { BsHddRackFill } from "react-icons/bs";
import { IoWarning } from "react-icons/io5";

import { isUser } from "../components/localStore/getCurrentUser";
import CustomModal from "../components/ui/modal";
import SideMenu from "../components/ui/sideMenu";
import { withNamespaces } from "react-i18next";
import Navbar from "../components/common/Navbar";
import Nav2 from "../components/common/Nav2";
import MostSold from "../components/inventory/MostSold";
import ExpManagment from "../components/inventory/ExpManagment";
import RackManagment from "../components/inventory/RackManagment";
import DeadStock from "../components/inventory/DeadStock";
import Return from "../components/inventory/Return";
import UnSoldStock from "../components/inventory/UnSoldStock";
import jwtDecode from "jwt-decode";

function InventoryPage({ t }) {
  const [activeSubMenu, setActiveSubMenu] = useState("Most Sold");
  const [subMenu, setSubMenu] = useState("Most Sold");
  const [inventoryMenu, setInventoryMenu] = useState("");
  const [currentFullInvoice, setCurrentFullInvoice] = useState([
    {
      productName: "Product One",
      companyName: "Cipla",
      quantity: 100,
      expDate: "feb 25",
      price: 258,
      rackNo: 1001,
      Id: 2,
    },
    {
      productName: "Product Two",
      companyName: "Cadila",
      quantity: 254,
      expDate: "march 25",
      price: 32,
      rackNo: 1002,
      Id: 2,
    },
    {
      productName: "Product Three",
      companyName: "Zydus",
      quantity: 69,
      expDate: "feb 25",
      price: 91,
      rackNo: 1001,
      Id: 3,
    },
    {
      productName: "Product Four",
      companyName: "Cipla",
      quantity: 49,
      expDate: "feb 25",
      price: 34,
      rackNo: 1001,
      Id: 4,
    },
    {
      productName: "Product Five",
      companyName: "Arti Drugs",
      quantity: 45,
      expDate: "feb 25",
      price: 89,
      rackNo: 1001,
      Id: 5,
    },
    {
      productName: "Product Six",
      companyName: "Cipla",
      quantity: 78,
      expDate: "feb 25",
      price: 25,
      rackNo: 1001,
      Id: 6,
    },
    {
      productName: "Product Seven",
      companyName: "Lupin",
      quantity: 31,
      expDate: "feb 25",
      price: 89,
      rackNo: 1001,
      Id: 7,
    },
    {
      productName: "Product Eight",
      companyName: "Trigen",
      quantity: 89,
      expDate: "feb 25",
      price: 98,
      rackNo: 1001,
      Id: 8,
    },
    {
      productName: "Product Nine",
      companyName: "Cipla",
      quantity: 325,
      expDate: "feb 25",
      price: 85,
      rackNo: 1001,
      Id: 9,
    },
    {
      productName: "Product Ten",
      companyName: "sun Pharma",
      quantity: 66,
      expDate: "feb 25",
      price: 123,
      rackNo: 1001,
      Id: 10,
    },
  ]);
  const iconSixe = 15;

  //local storage bundle get and decode
  let token = localStorage.getItem("auth")
    ? localStorage.getItem("auth")
    : "auth token not found in inventory page";
  let decoded = jwtDecode(token)
    ? jwtDecode(token)
    : "can`t decode jwt in inventory page";
  let salesSubmenu = decoded.bundle[2].subMenu
    ? decoded.bundle[2].subMenu
    : "can`t find inventorySubmenu in inventory page";

  useEffect(() => {
    if (
      localStorage.getItem("inventory_Menu") === undefined ||
      localStorage.getItem("inventory_Menu") === null
    ) {
      console.log("local storage undefined or null in inventory page");
    } else {
      let p = localStorage.getItem("inventory_Menu");
      let z = JSON.parse(p);
      setInventoryMenu(z);
      console.log(z);
    }
  }, []);

  //buttons Array
  let inventoryData = [
    {
      title: salesSubmenu[0].title ? salesSubmenu[0].title : "Most Sold",
      path: "/subReports",
      logo: <BiTrendingUp size={iconSixe} color="black" />,
      showButton: true,
    },
    {
      title: salesSubmenu[1].title ? salesSubmenu[1].title : "Exp Managment",
      path: "/subReports",
      logo: <FcExpired size={iconSixe} color="black" />,
      showButton: inventoryMenu.ExpiryManagement,
    },
    {
      title: salesSubmenu[2].title ? salesSubmenu[2].title : "Rack Managment",
      path: "/totalSales",
      logo: <BsHddRackFill size={iconSixe} color="black" />,
      showButton: inventoryMenu.RackManagement,
    },
    {
      title: salesSubmenu[3].title ? salesSubmenu[3].title : "Dead Stocks",
      path: "/Maintainance",
      logo: <HiArrowSmDown size={iconSixe} color="black" />,
      showButton: inventoryMenu.DeadStock,
    },
    {
      title: salesSubmenu[4].title ? salesSubmenu[4].title : "UnSold Stock",
      path: "/Maintainance",
      logo: <IoWarning size={iconSixe} color="black" />,
      showButton: inventoryMenu.Unsold,
    },
    {
      title: salesSubmenu[5].title ? salesSubmenu[5].title : "Returns",
      path: "/Maintainance",
      logo: <TbTruckReturn size={iconSixe} color="black" />,
      showButton: inventoryMenu.Return,
    },
  ];

  // pagination
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  console.log(subMenu);
  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="border-bottom">
        <Col className="mt-1 col-4">
          <Navbar />
        </Col>
        <Col>
          {inventoryData &&
            inventoryData.map((i, index) => {
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

      <Row className="">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className=" col-18 bg-white">
          {subMenu && subMenu === "Most Sold" ? (
            <MostSold currentFullInvoice={currentFullInvoice} items={items} />
          ) : (
            ""
          )}
          {subMenu && subMenu === "Expiry Management" ? (
            <ExpManagment currentFullInvoice={currentFullInvoice} />
          ) : (
            ""
          )}
          {subMenu && subMenu === "Rack Management" ? <RackManagment /> : ""}
          {subMenu && subMenu === "Dead Stock" ? <DeadStock /> : ""}
          {subMenu && subMenu === "Unsold" ? <UnSoldStock /> : ""}
          {subMenu && subMenu === "Return" ? <Return /> : ""}
        </Col>

        <Col className="col-4 bg-veryLight border-end">Nikhil</Col>
        <Col className="bg-veryLight col-1 ">
          <ButtonGroup vertical className="p-1">
            <div className="p-0 m-0 sideMenuIcon">
              <CiGrid31 size={25} className=" my-2" />
            </div>

            <div className="p-0 m-0 sideMenuIcon">
              <CiCircleList size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiBatteryCharging size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiUnlock size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiUser size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiViewTimeline size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiSettings size={20} className=" my-2" />
            </div>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default withNamespaces()(InventoryPage);
