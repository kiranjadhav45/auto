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
import { AiFillDelete } from "react-icons/ai";

function Sales() {
  const [tableData, setTableData] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [searchRes, setSearchRes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemList, setItemList] = useState([
    {
      itemName: "Product One",
      itemPrice: 202,
      itemInvoice: 45845,
      id: 1,
    },
    {
      itemName: "Product Two",
      itemPrice: 260,
      itemInvoice: 45845,
      id: 2,
    },
    {
      itemName: "Product Three",
      itemPrice: 240,
      itemInvoice: 45845,
      id: 3,
    },
    {
      itemName: "Product Four",
      itemPrice: 260,
      itemInvoice: 45845,
      id: 4,
    },
    {
      itemName: "Product Five",
      itemPrice: 250,
      itemInvoice: 45845,
      id: 5,
    },
    {
      itemName: "Product One",
      itemPrice: 204,
      itemInvoice: 45845,
      id: 6,
    },
    {
      itemName: "Product Two",
      itemPrice: 207,
      itemInvoice: 45845,
      id: 7,
    },
    {
      itemName: "Product Three",
      itemPrice: 203,
      itemInvoice: 45845,
      id: 8,
    },
    {
      itemName: "Product Four",
      itemPrice: 202,
      itemInvoice: 45845,
      id: 9,
    },
    {
      itemName: "Product Five",
      itemPrice: 202,
      itemInvoice: 45845,
      id: 10,
    },
    {
      itemName: "Product One",
      itemPrice: 2045,
      itemInvoice: 45845,
      id: 11,
    },
    {
      itemName: "Product Two",
      itemPrice: 207,
      itemInvoice: 45845,
      id: 12,
    },
    {
      itemName: "Product Three",
      itemPrice: 205,
      itemInvoice: 45845,
      id: 13,
    },
    {
      itemName: "Product Four",
      itemPrice: 25,
      itemInvoice: 45845,
      id: 14,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 15,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 16,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 17,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 18,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 19,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 20,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 21,
    },
    {
      itemName: "Product Five",
      itemPrice: 255,
      itemInvoice: 45845,
      id: 22,
    },
  ]);

  // this is Pagination section
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const index = [];
  for (let i = indexOfFirstItem + 1; i <= indexOfLastItem; i++) {
    index.push(i);
  }

  // inputBox or Search Handle
  const searchHandle = (e) => {
    let test = itemList.filter((a) => a.itemName === e.target.value);
    setSearchRes(test);
  };

  // this is sales table data handle
  const [billInfo, setBillInfo] = useState([]);

  function handleTableData(i) {
    let a = [...billInfo];
    a.push(i);
    setBillInfo(a);
    setSearchRes(false);
  }

  function handleDeleteTableData(item) {
    let a = [...billInfo];
    let test = a.filter((i) => i.id !== item.id);
    // console.log("TEST", test);
    // console.log("Id", item.id);
    setBillInfo(test);
  }
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
                    <ListGroup>
                      <ListGroup.Item
                        className=""
                        value={i.itemName}
                        onClick={(e) => handleTableData(i)}
                      >
                        {i.itemName}
                      </ListGroup.Item>
                    </ListGroup>
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
                <tr className="text-center">
                  <th data-priority="2">Sr No</th>
                  <th data-priority="2">Product Name</th>
                  <th data-priority="1">Price</th>
                  <th data-priority="2">Quantity</th>
                  <th data-priority="2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {billInfo.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td>{item.id}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.itemInvoice}</td>
                    <td onClick={() => handleDeleteTableData(item)}>
                      <AiFillDelete className="text-center" size={20} />
                    </td>
                    {/* </tr> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <Pagination
            pageSize={pageSize}
            pagination={pagination}
            itemList={itemList.length}
          /> */}
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
