import React, { useEffect, useState } from "react";
import SideMenu from "../components/ui/sideMenu";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
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
import { GrHostMaintenance } from "react-icons/gr";
import {
  MdCategory,
  MdMiscellaneousServices,
  MdPendingActions,
} from "react-icons/md";

function Sales() {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRes, setSearchRes] = useState([]);
  const [activeSubMenu, setActiveSubMenu] = useState("");
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
  const [submenu, setSubMenu] = useState([
    {
      category: "",
      title: "",
      logo: "",
      path: "",
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
  // let allData = {
  //   path1: "",
  //   path2: "",
  //   path3: "",
  //   path4: "",
  //   title1: "",
  //   title2: "",
  //   title3: "",
  //   title4: "",
  //   logo1: "",
  //   logo2: "",
  //   logo3: "",
  //   logo4: "",
  // };
  useEffect(() => {
    const handleOnSubMenu = async () => {
      if (activeSubMenu && activeSubMenu === "dashboard") {
        setSubMenu.title1("Pre-Order");
        setSubMenu.title2("Total Sales");
        setSubMenu.title3("pending settlements");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      } else if (activeSubMenu && activeSubMenu === "sales") {
        setSubMenu.title1("Sales");
        setSubMenu.title2("Service");
        setSubMenu.title3("Maintenance");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      } else if (activeSubMenu && activeSubMenu === "inventory") {
        setSubMenu.title1("Sales");
        setSubMenu.title2("Service");
        setSubMenu.title3("Maintenance");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      } else if (activeSubMenu && activeSubMenu === "taxSlab") {
        setSubMenu.title1("Sales");
        setSubMenu.title2("Service");
        setSubMenu.title3("Maintenance");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      } else if (activeSubMenu && activeSubMenu === "hrm") {
        setSubMenu.title1("Sales");
        setSubMenu.title2("Service");
        setSubMenu.title3("Maintenance");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      } else if (activeSubMenu && activeSubMenu === "accounts") {
        setSubMenu.title1("Sales");
        setSubMenu.title2("Service");
        setSubMenu.title3("Maintenance");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      } else if (activeSubMenu && activeSubMenu === "masters") {
        setSubMenu.title1("Sales");
        setSubMenu.title2("Service");
        setSubMenu.title3("Maintenance");
        setSubMenu.path1("/lastOrders");
        setSubMenu.path2("/totalSales");
        setSubMenu.path3("/Maintainance");
      }
      console.log("activeSubMenu", activeSubMenu);
      console.log("SubMenu", submenu);
    };
    handleOnSubMenu();
  }, [activeSubMenu, submenu]);
  console.log("submenu", submenu);
  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="bg-white border-bottom p-1">
        <Col className="col-1">
          <strong size="sm" className=" m-1 mx-1">
            Auto
          </strong>

          {/* <button className="headerButton mx-2">
            <FcSalesPerformance size={20} color="dark" />
            <strong className="text-blue m-0 p-0 mx-1 mr-5">Sales</strong>
          </button> */}
        </Col>
        <Col className="col-2 m-1">
          <Form.Select
            size="sm"
            className="Form-select-main"
            onChange={(e) => setActiveSubMenu(e.target.value)}
            aria-label="Default select example"
          >
            <option value="dashboard">Dashboard</option>
            <option value="sales">Sales</option>
            <option value="inventory">Inventory</option>
            <option value="taxSlab">items</option>
            <option value="hrm">HRM</option>
            <option value="accounts">Accounts</option>
            <option value="masters">Masters</option>
          </Form.Select>
        </Col>

        <Col className="text-start">
          <Link to={submenu.path1}>
            <button className="headerButton mx-2">
              <FcSalesPerformance size={20} color="black" />
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {allData.title1}
              </span>
            </button>
          </Link>
          <Link to={submenu.path2}>
            <button className="headerButton mx-2">
              <FcSalesPerformance size={20} color="black" />
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {allData.title2}
              </span>
            </button>
          </Link>
          <Link to={submenu.path3}>
            <button className="headerButton mx-2">
              <MdPendingActions size={20} color="black" />
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {allData.title3}
              </span>
            </button>
          </Link>
        </Col>

        {/* {activeSubMenu && activeSubMenu === "sales" ? (
          <Col className="text-start">
            <Link to="/lastOrders">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Sales</span>
              </button>
            </Link>
            <Link to="/totalSales">
              <button className="headerButton mx-2">
                <MdMiscellaneousServices size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Service</span>
              </button>
            </Link>
            <Link to="/Maintainance">
              <button className="headerButton mx-2">
                <GrHostMaintenance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">
                  Maintenance
                </span>
              </button>
            </Link>
          </Col>
        ) : (
          ""
        )}
        {activeSubMenu && activeSubMenu === "inventory" ? (
          <Col className="text-start">
            <Link to="/lastOrders">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Most Sold</span>
              </button>
            </Link>
            <Link to="/totalSales">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">
                  Exp Managment
                </span>
              </button>
            </Link>
            <Link to="/Maintainance">
              <button className="headerButton mx-2">
                <MdPendingActions size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">
                  Rack Managment
                </span>
              </button>
            </Link>
            <Link to="/Maintainance">
              <button className="headerButton mx-2">
                <MdPendingActions size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Dead Stock</span>
              </button>
            </Link>
            <Link to="/Maintainance">
              <button className="headerButton mx-2">
                <MdPendingActions size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Returns</span>
              </button>
            </Link>
          </Col>
        ) : (
          ""
        )}
        {activeSubMenu && activeSubMenu === "hrm" ? (
          <Col className="text-start">
            <Link to="/lastOrders">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Customer</span>
              </button>
            </Link>
            <Link to="/totalSales">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Supplier</span>
              </button>
            </Link>
            <Link to="/Maintainance">
              <button className="headerButton mx-2">
                <MdPendingActions size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Staff</span>
              </button>
            </Link>
          </Col>
        ) : (
          ""
        )}
        {activeSubMenu && activeSubMenu === "account" ? (
          <Col className="text-start">
            <Link to="/lastOrders">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Customer</span>
              </button>
            </Link>
            <Link to="/totalSales">
              <button className="headerButton mx-2">
                <FcSalesPerformance size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Supplier</span>
              </button>
            </Link>
            <Link to="/Maintainance">
              <button className="headerButton mx-2">
                <MdPendingActions size={20} color="black" />
                <span className="text-black m-0 p-0 mx-1 mr-5">Staff</span>
              </button>
            </Link>
          </Col>
        ) : (
          ""
        )} */}
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
                  <th data-priority="2">Sr No</th>
                  <th data-priority="2">Product Name</th>
                  <th data-priority="1">Price</th>
                  <th data-priority="2">Invoice No</th>
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
