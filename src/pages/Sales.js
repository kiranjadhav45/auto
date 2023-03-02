import React, { useEffect, useState } from "react";
import SideMenu from "../components/ui/sideMenu";
import Pagination from "./Pagination";
import Navbar from "../components/common/Navbar";
import { withNamespaces } from "react-i18next";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";
import Maintenance from "../components/sales/Maintenance";
import SalesComponet from "../components/sales/SalesComp";
import TotalSales from "../components/sales/TotalSales";
import Nav2 from "../components/common/Nav2";
import jwtDecode from "jwt-decode";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import {
  CiBatteryCharging,
  CiCircleList,
  CiFilter,
  CiGrid31,
  CiSettings,
  CiUnlock,
  CiUser,
  CiViewTimeline,
} from "react-icons/ci";
import { FcSalesPerformance } from "react-icons/fc";
import { BiTrendingUp } from "react-icons/bi";
import { GrVmMaintenance } from "react-icons/gr";

const Sales = ({ t }) => {
  const iconSixe = 15;
  let token = localStorage.getItem("auth");
  let decoded = jwtDecode(token);
  let salesSubmenu = decoded.bundle[1].subMenu;
  let logo = decoded.bundle[1];

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRes, setSearchRes] = useState([]);
  const [subMenu, setSubMenu] = useState("Sales");
  const [itemList, setItemList] = useState([
    {
      itemName: "Product One",
      itemPrice: 202,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Two",
      itemPrice: 260,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Three",
      itemPrice: 240,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Four",
      itemPrice: 260,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 250,
      itemInvoice: 45845,
    },
    {
      itemName: "Product One",
      itemPrice: 204,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Two",
      itemPrice: 207,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Three",
      itemPrice: 203,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Four",
      itemPrice: 202,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 202,
      itemInvoice: 45845,
    },
    {
      itemName: "Product One",
      itemPrice: 2045,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Two",
      itemPrice: 207,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Three",
      itemPrice: 205,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Four",
      itemPrice: 25,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
    },
  ]);
  const [salesData, setSalesData] = useState({
    title1: salesSubmenu[0].title,
    title2: salesSubmenu[1].title,
    title3: salesSubmenu[2].title,
    logo1: <FcSalesPerformance size={iconSixe} color="black" />,
    logo2: <BiTrendingUp size={iconSixe} color="black" />,
    logo3: <GrVmMaintenance size={iconSixe} color="black" />,
  });
  const searchHandle = (e) => {
    let test = itemList.filter((a) => a.itemName === e.target.value);
    setSearchRes(test);
  };

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    // console.log(indexOfFirstItem + 1);
  };
  const index = [];
  for (let i = indexOfFirstItem + 1; i <= indexOfLastItem; i++) {
    index.push(i);
  }

  const message = useSelector((state) => state.messageReducer.message);

  // console.log("states message=", message);

  const handleSubSubMenu = (data) => {
    setSubMenu(data);
  };

  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="bg-white border-bottom ">
        <Col className="col-4">
          <Navbar />
        </Col>
        <Col>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(salesData.title1)}
          >
            {salesData.logo1}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {salesData.title1}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(salesData.title2)}
          >
            {salesData.logo2}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {salesData.title2}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(salesData.title3)}
          >
            {salesData.logo3}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {salesData.title3}
            </small>
          </button>
        </Col>
        <Col className="col-6">
          <Nav2 />
        </Col>
      </Row>
      <Row className="">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>

        <Col className="col-18 bg-white">
          {subMenu && subMenu === "main" ? (
            <Col className="col-18 bg-white">
              <Row className="mt-2">
                <Col>
                  <small>{t("searchProduct")}</small>
                </Col>
                <Col className="col-8">
                  <Form.Control
                    size="sm"
                    placeholder={t("search")}
                    onChange={searchHandle}
                  ></Form.Control>

                  {searchRes.length > 0 &&
                    searchRes.map((i) => (
                      <small className="saleListgroup">
                        <ListGroup.Item>{i.itemName}</ListGroup.Item>
                        {/* <ListGroup.Item>{i.itemPrice}</ListGroup.Item>{" "} */}
                        {/* <ListGroup.Item>{i.itemInvoice}</ListGroup.Item>{" "} */}
                      </small>
                    ))}
                </Col>
                <Col className="col-2 "></Col>
                <Col className="">
                  <ButtonGroup className=""></ButtonGroup>
                </Col>
                <Col className="col-8">
                  <ButtonGroup className=" float-end">
                    <button className="menuButton">
                      <CiFilter size={16} color="black" />
                      <small className="text-dark m-0 p-0 mx-1">
                        {t("filterPrice")}{" "}
                      </small>
                    </button>
                    <div>
                      <Form.Select
                        onChange={(e) => setPageSize(e.target.value)}
                        size="sm"
                        aria-label="Default select example"
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </Form.Select>
                    </div>
                  </ButtonGroup>
                </Col>
              </Row>
              <div
                className="mt-2 table-responsive salesTable"
                data-pattern="priority-columns"
              >
                <table
                  summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality"
                  className="table table-bordered table-hover "
                >
                  {" "}
                  <thead>
                    <tr>
                      <th data-priority="2">{t("srNo")}</th>
                      <th data-priority="2">{t("productName")}</th>
                      <th data-priority="1">{t("price")}</th>
                      <th data-priority="2">{t("invoice")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemList
                      .slice(indexOfFirstItem, indexOfLastItem)
                      .map((item, z) => (
                        <tr key={z}>
                          <td>{index[0 + z]}</td>
                          <td>{item.itemName}</td>
                          <td>{item.itemPrice}</td>
                          <td>{item.itemInvoice}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <Pagination
                pageSize={pageSize}
                pagination={pagination}
                itemList={itemList.length}
              />
              <Row className="border-top ">
                <Col className="col-18 text-center p-1 mt-1"></Col>
                <Col className="col-6 float-end">
                  <Row>
                    <Col className="border text-center p-1">C</Col>
                    <Col className="border text-center p-1">H</Col>
                    <Col className="border text-center p-1">A</Col>
                  </Row>
                  <Row className="">
                    <Col className="border text-center p-1">R</Col>
                    <Col className="border text-center p-1">T</Col>
                    <Col className="border text-center p-1">S</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          ) : (
            ""
          )}

          {subMenu && subMenu === "Sales" ? (
            <Col className="col-18 bg-white">
              <SalesComponet />
            </Col>
          ) : (
            ""
          )}

          {subMenu && subMenu === "Service" ? (
            <Col className="col-18 bg-white">
              <TotalSales />
            </Col>
          ) : (
            ""
          )}

          {subMenu && subMenu === "Maintainance" ? (
            <Col className="col-18 bg-white">
              <Maintenance />
            </Col>
          ) : (
            ""
          )}
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
      {/* <Row className="border-top bg-bootGrey mt-1" style={{ height: "25vh" }}>
        <Col className="col-16 my-auto text-center ">
          {" "}
          © Copyright 2023 by{" "}
          <strong className="text-info"> Caliph Code</strong>
        </Col>
        <Col className="col-8 my-auto text-center">
          <ButtonGroup className="p-1 bg-bootGrey">
            <Link to="/inventory">
              <div className="p-0 m-0 menuIcon bg-bootGrey">
                <BsLinkedin size={25} className="mx-4" />
              </div>
            </Link>

            <Link>
              <div className="p-0 m-0 menuIcon bg-bootGrey">
                <BsTwitter size={30} className="mx-4" />
              </div>
            </Link>

            <Link>
              <div className="p-0 m-0 menuIcon bg-bootGrey">
                <RiInstagramFill size={30} className="mx-4" />
              </div>
            </Link>

            <Link to="/masters">
              <div className="p-0 m-0 menuIcon bg-bootGrey">
                <BsFacebook size={25} className="mx-4" />
              </div>
            </Link>
          </ButtonGroup>
        </Col>
      </Row> */}
      <Footer />
    </Container>
  );
};

export default withNamespaces()(Sales);
