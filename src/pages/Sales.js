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

import { FcSalesPerformance, FcExpired } from "react-icons/fc";
import { GrHostMaintenance, GrVmMaintenance } from "react-icons/gr";
import {
  BsFillCartCheckFill,
  BsHddRackFill,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import { HiArrowSmDown } from "react-icons/hi";
import { TbTruckReturn, TbReportAnalytics } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaTruckMoving } from "react-icons/fa";
import { RiTeamFill, RiBillFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";

import {
  MdCategory,
  MdMiscellaneousServices,
  MdPendingActions,
  MdOutlineMiscellaneousServices,
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

  const [submenu, setSubMenu] = useState({
    path1: "/lastOrders",
    path2: "/totalSales",
    path3: "/Maintainance",
    path4: "",
    path5: "",
    path6: "",
    title1: "Pre-Order",
    title2: "Service",
    title3: "pending settlements",
    title4: "",
    title5: "",
    title6: "",
    logo1: <BsFillCartCheckFill size={20} color="black" />,
    logo2: <MdOutlineMiscellaneousServices size={20} color="black" />,
    logo3: <MdPendingActions size={20} color="black" />,
    logo4: "",
    logo5: "",
    logo6: "",
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

  useEffect(() => {
    let dashboardData = {
      title1: "Pre-Order",
      title2: "Service",
      title3: "pending settlements",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <FcSalesPerformance size={20} color="black" />,
      logo2: <FcSalesPerformance size={20} color="black" />,
      logo3: <MdPendingActions size={20} color="black" />,
    };
    let salesData = {
      title1: "Sales",
      title2: "Total Sales",
      title3: "Maintenance",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <FcSalesPerformance size={20} color="black" />,
      logo2: <BiTrendingUp size={20} color="black" />,
      logo3: <GrVmMaintenance size={20} color="black" />,
    };
    let inventoryData = {
      title1: "Most Sold",
      title2: "Exp Managment",
      title3: "Rack Managment",
      title4: "Dead Stocks",
      title5: "Returns",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <BiTrendingUp size={20} color="black" />,
      logo2: <FcExpired size={20} color="black" />,
      logo3: <BsHddRackFill size={20} color="black" />,
      logo4: <HiArrowSmDown size={20} color="black" />,
      logo5: <TbTruckReturn size={20} color="black" />,
    };
    let taxSlabData = {
      title1: "Sales",
      title2: "Total Sales",
      title3: "Maintenance",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <FcSalesPerformance size={20} color="black" />,
      logo2: <BiTrendingUp size={20} color="black" />,
      logo3: <GrVmMaintenance size={20} color="black" />,
    };
    let hrmData = {
      title1: "Customer",
      title2: "Supplier",
      title3: "Staff",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <ImProfile size={20} color="black" />,
      logo2: <FaTruckMoving size={20} color="black" />,
      logo3: <RiTeamFill size={20} color="black" />,
    };
    let accountsData = {
      title1: "Settle Bill",
      title2: "Transaction",
      title3: "Credit",
      title4: "Debit",
      title5: "Report",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <RiBillFill size={20} color="black" />,
      logo2: <AiOutlineTransaction size={20} color="black" />,
      logo3: <BsFillCreditCard2FrontFill size={20} color="black" />,
      logo4: <BsFillCreditCard2FrontFill size={20} color="black" />,
      logo5: <TbReportAnalytics size={20} color="black" />,
    };
    let mastersData = {
      title1: "Menu Master",
      title2: "Sell Unit",
      title3: "Invoice",
      title4: "Printers",
      title5: "Tax Slab",
      title6: "View Master",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <MdPendingActions size={20} color="black" />,
      logo2: <MdPendingActions size={20} color="black" />,
      logo3: <MdPendingActions size={20} color="black" />,
      logo4: <MdPendingActions size={20} color="black" />,
      logo5: <MdPendingActions size={20} color="black" />,
      logo6: <MdPendingActions size={20} color="black" />,
    };

    if (activeSubMenu && activeSubMenu === "dashboard") {
      setSubMenu(dashboardData);
    } else if (activeSubMenu && activeSubMenu === "sales") {
      setSubMenu(salesData);
    } else if (activeSubMenu && activeSubMenu === "inventory") {
      setSubMenu(inventoryData);
    } else if (activeSubMenu && activeSubMenu === "taxSlab") {
      setSubMenu(taxSlabData);
    } else if (activeSubMenu && activeSubMenu === "hrm") {
      setSubMenu(hrmData);
    } else if (activeSubMenu && activeSubMenu === "accounts") {
      setSubMenu(accountsData);
    } else if (activeSubMenu && activeSubMenu === "masters") {
      setSubMenu(mastersData);
    }
  }, [activeSubMenu]);

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

        <Col className="text-start ">
          <Link to={submenu.path1}>
            <button className="headerButton mx-2">
              {submenu.logo1}
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title1}
              </span>
            </button>
          </Link>
          <Link to={submenu.path2}>
            <button className="headerButton mx-2">
              {submenu.logo2}
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title2}
              </span>
            </button>
          </Link>
          <Link to={submenu.path3}>
            <button className="headerButton mx-2">
              {submenu.logo3}
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title3}
              </span>
            </button>
          </Link>
          <Link to={submenu.path4}>
            <button className="headerButton mx-2">
              {submenu.logo4}
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title4}
              </span>
            </button>
          </Link>
          <Link to={submenu.path5}>
            <button className="headerButton mx-2">
              {submenu.logo5}
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title5}
              </span>
            </button>
          </Link>
          <Link to={submenu.path6}>
            <button className="headerButton mx-2">
              {submenu.logo6}
              <span className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title6}
              </span>
            </button>
          </Link>
        </Col>

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
