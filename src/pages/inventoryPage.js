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

function InventoryPage({ t }) {
  const [allMasters, setAllMasters] = useState();
  const [currentTableHeaders, setCurrentTableHeaders] = useState();
  const [activeSubMenu, setActiveSubMenu] = useState("Most Sold");
  const [currentSubMenu, setCurrentSubMenu] = useState();
  const [showModal, setShowModal] = useState(false);
  const [subMenu, setSubMenu] = useState("Most Sold");
  const iconSixe = 15;
  let p = localStorage.getItem("inventory");
  let inventoryMenu = JSON.parse(p);
  let inventoryData = [
    {
      title: "Most Sold",
      path: "/subReports",
      logo: <BiTrendingUp size={iconSixe} color="black" />,
      showButton: true,
    },
    {
      title: "Exp Managment",
      path: "/subReports",
      logo: <FcExpired size={iconSixe} color="black" />,
      showButton: inventoryMenu.ExpManagmentChecked,
    },
    {
      title: "Rack Managment",
      path: "/totalSales",
      logo: <BsHddRackFill size={iconSixe} color="black" />,
      showButton: inventoryMenu.RackManagmentChecked,
    },
    {
      title: "Dead Stocks",
      path: "/Maintainance",
      logo: <HiArrowSmDown size={iconSixe} color="black" />,
      showButton: inventoryMenu.DeadStocksChecked,
    },
    {
      title: "UnSold Stock",
      path: "/Maintainance",
      logo: <IoWarning size={iconSixe} color="black" />,
      showButton: inventoryMenu.UnSoldStockChecked,
    },
    {
      title: "Returns",
      path: "/Maintainance",
      logo: <TbTruckReturn size={iconSixe} color="black" />,
      showButton: inventoryMenu.ReturnsChecked,
    },
  ];
  const handleSubSubMenu = (data) => {
    setSubMenu(data);
  };
  // useEffect(() => {
  // const getMaster = async () => {
  //   const findUser = isUser();
  //   let res = await getMasterPerUser(findUser._id);
  //   setAllMasters(res.data.ack[0]);
  //   let currentMenu = res.data.ack[0].menu.filter(
  //     (i) => i.title === "Inventory"
  //   );
  //   setCurrentSubMenu(currentMenu[0]);
  //   let test = currentMenu[0].subMenu.filter(
  //     (i) => i.title === activeSubMenu
  //   );
  //   console.log("Fields", test[0].fields);
  //   setCurrentTableHeaders(test[0].fields);
  // };
  // getMaster();
  // }, [activeSubMenu]);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

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
          {subMenu && subMenu === "Exp Managment" ? (
            <ExpManagment currentFullInvoice={currentFullInvoice} />
          ) : (
            ""
          )}
          {subMenu && subMenu === "Rack Managment" ? <RackManagment /> : ""}
          {subMenu && subMenu === "Dead Stocks" ? <DeadStock /> : ""}
          {subMenu && subMenu === "UnSold Stock" ? <UnSoldStock /> : ""}
          {subMenu && subMenu === "Returns" ? <Return /> : ""}
        </Col>
        {/* <Col className="col-18 bg-white "> */}
        {/* <Row className="mt-2"> */}
        {/* <Col className="col-16">
              <ButtonGroup className="">
                <div className="mr-1">
                  <Form.Select
                    size="sm"
                    onChange={(e) => setActiveSubMenu(e.target.value)}
                    aria-label="Default select example"
                  >
                    {currentSubMenu &&
                      currentSubMenu.subMenu.map((i) => (
                        <option value={i.title}>{i.title} 2</option>
                      ))}
                    <option value={10}>{t("Types")}</option>
                    <option value={10}>{t("Most Sold")}</option>
                    <option value={20}>{t("Exp Managment")}</option>
                    <option value={20}>{t("Rack Managment")}</option>
                    <option value={20}>{t("Dead Stock")}</option>
                    <option value={20}>{t("Return")}</option>
                  </Form.Select>
                </div>

                <button class="menuButton mx-2">
                  <CiPlay1 size={16} color="black" />
                  <small className="text-dark m-0 p-0 mx-1">
                    577 {t("Items")}
                  </small>
                </button>

                <button class="menuButton mx-2">
                  <CiSquarePlus size={16} color="black" />
                  <small className="text-dark m-0 p-0 mx-1">
                    {t("Add New")}
                  </small>
                </button>

                {/* <button class="menuButton">
                  <CiSettings size={16} color="black" />
                  <small className="text-dark m-0 p-0 mx-1">Settings</small>
                </button> */}
        {/* </ButtonGroup> */}
        {/* </Col> */}
        {/* <Col>
              <ButtonGroup className=" float-end">
                <button class="menuButton ">
                  <CiSearch size={16} color="black" />
                </button>
                <button class="menuButton">
                  <CiFilter size={16} color="black" />
                  <small className="text-dark m-0 p-0 mx-1">
                    {t("Filters")}
                  </small>
                </button>
                <div>
                  <Form.Select size="sm" aria-label="Default select example">
                    <option>10</option>
                    <option value="10">25</option>
                    <option value="25">50</option>
                    <option value="50">100</option>
                  </Form.Select>
                </div>
              </ButtonGroup>
            </Col> */}
        {/* </Row> */}
        {/* <div
            className="mt-2 table-responsive"
            data-pattern="priority-columns"
          >
            <table
              summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality"
              className="table table-bordered table-hover"
            >
              {" "}
              <thead>
                <tr>
                  {currentTableHeaders &&
                    currentTableHeaders.map((i) => <th>{i.title}</th>)}
                </tr>
                <tr>
                  <th data-priority="1">Languages</th>
                  <th data-priority="2">Population</th>
                  <th data-priority="3">Median Age</th>
                  <th data-priority="4">Area (Km²)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Greece</td>
                  <td>Greek 99% (official), English, French</td>
                  <td>11,128,404</td>
                  <td>43.2</td>
                  <td>131,956</td>
                </tr>
                <tr>
                  <td>Luxembourg</td>
                  <td>
                    Luxermbourgish (national) French, German (both
                    administrative)
                  </td>
                  <td>536,761</td>
                  <td>39.1</td>
                  <td>2,586</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>Russian, others</td>
                  <td>142,467,651</td>
                  <td>38.4</td>
                  <td>17,076,310</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>Swedish, small Sami- and Finnish-speaking minorities</td>
                  <td>9,631,261</td>
                  <td>41.1</td>
                  <td>449,954</td>
                </tr>
                <tr>
                  <td>Argentina</td>
                  <td>Spanish (official), English, Italian, German, French</td>
                  <td>41,803,125</td>
                  <td>31.3</td>
                  <td>2,780,387</td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>English 79%, native and other languages</td>
                  <td>23,630,169</td>
                  <td>37.3</td>
                  <td>7,739,983</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>Greek 99% (official), English, French</td>
                  <td>11,128,404</td>
                  <td>43.2</td>
                  <td>131,956</td>
                </tr>
                <tr>
                  <td>Luxembourg</td>
                  <td>
                    Luxermbourgish (national) French, German (both
                    administrative)
                  </td>
                  <td>536,761</td>
                  <td>39.1</td>
                  <td>2,586</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>Russian, others</td>
                  <td>142,467,651</td>
                  <td>38.4</td>
                  <td>17,076,310</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>Swedish, small Sami- and Finnish-speaking minorities</td>
                  <td>9,631,261</td>
                  <td>41.1</td>
                  <td>449,954</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        {/* <Pagination className="float-end" size="sm">
            {items}
          </Pagination> */}
        {/* </Col> */}
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
