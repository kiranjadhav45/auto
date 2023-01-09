import React, { useEffect, useState } from "react";
import SideMenu from "../components/ui/sideMenu";
import Pagination from "./Pagination";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
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
import { FcSalesPerformance } from "react-icons/fc";

function Sales() {
  const [pageSize, setPageSize] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRes, setSearchRes] = useState([]);
  const [itemList, setItemList] = useState([
    {
      itemName: "Product One",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Two",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Three",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Four",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product One",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Two",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Three",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Four",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product One",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Two",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Three",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Four",
      itemPrice: 20,
      itemInvoice: 45845,
    },
    {
      itemName: "Product Five",
      itemPrice: 20,
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
  };

  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="bg-white border-bottom p-1">
        <Col className="">
          <strong size="sm" className="mx-2">
            N
          </strong>

          <button className="headerButton mx-2">
            <FcSalesPerformance size={20} color="black" />
            <strong className="text-blue m-0 p-0 mx-1 mr-5">Sales</strong>
          </button>
        </Col>

        <Col className="text-end">
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
        </Col>
      </Row>
      <Row className="">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18 bg-white ">
          <Row className="mt-2">
            <Col>
              <small>Search Product</small>
            </Col>
            <Col className="col-8">
              <Form.Control
                size="sm"
                placeholder="Search"
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
                    Filters Price{" "}
                  </small>
                </button>
                <div>
                  <Form.Select size="sm" aria-label="Default select example">
                    <option>1000</option>
                    <option value="10">2000</option>
                    <option value="25">5000</option>
                    <option value="50">9000</option>
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
                  <th data-priority="2">Product Name</th>
                  <th data-priority="1">Price</th>
                  <th data-priority="2">Invoice No</th>
                </tr>
              </thead>
              <tbody>
                {itemList
                  .slice(indexOfFirstItem, indexOfLastItem)
                  .map((item, index) => (
                    <tr key={index}>
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

export default Sales;
