import React, { useEffect, useState } from "react";
import SideMenu from "../components/ui/sideMenu";
import Pagination from "./Pagination";
import Navbar from "../components/common/Navbar";
import { withNamespaces } from "react-i18next";
import Footer from "../components/common/Footer";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
// import Pagination from "react-bootstrap/Pagination";

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

function Sales({ t }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRes, setSearchRes] = useState([]);
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

  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="bg-white border-bottom p-1">
        <Col className="col-1">
          <strong size="sm" className=" m-1 mx-1">
            {t("logo")}
          </strong>

          {/* <button className="headerButton mx-2">
            <FcSalesPerformance size={20} color="dark" />
            <strong className="text-blue m-0 p-0 mx-1 mr-5">Sales</strong>
          </button> */}
        </Col>
        <Col>
          <Navbar />
        </Col>
        {/* 
        <Col className="text-end col-4">
          <button className="headerButton">
            <CiBellOn size={20} color="orange" />
            <small className="text-dark m-0 p-0 mx-1">2000</small>
          </button>

          <button className="headerButton">
            <CiStar size={20} color="dodgerblue" />
            <small className="text-dark m-0 p-0 mx-1">120</small>
          </button>

          <button className="headerButton position-relative">
            <CiTrophy size={20} color="green" />
            <small className="text-dark m-0 p-0 mx-1">200</small>
          </button>
        </Col> */}
      </Row>
      <Row className="">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18 bg-white ">
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
}

export default withNamespaces()(Sales);
