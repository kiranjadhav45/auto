import React from "react";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcSalesPerformance, FcExpired } from "react-icons/fc";
import { GrHostMaintenance, GrVmMaintenance } from "react-icons/gr";
import {
  BsFillCartCheckFill,
  BsHddRackFill,
  BsFillCreditCard2FrontFill,
  BsFillPrinterFill,
} from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import { HiArrowSmDown, HiViewGrid } from "react-icons/hi";
import { TbTruckReturn, TbReportAnalytics } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaTruckMoving } from "react-icons/fa";
import {
  RiTeamFill,
  RiBillFill,
  RiNumbersFill,
  RiCustomerService2Fill,
} from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbReceiptTax, TbTruckDelivery } from "react-icons/tb";

import {
  MdCategory,
  MdMiscellaneousServices,
  MdPendingActions,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

function Navbar() {
  const [activeSubMenu, setActiveSubMenu] = useState("");
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

  useEffect(() => {
    let dashboardData = {
      title1: "Pre-Order",
      title2: "Service",
      title3: "pending settlements",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <TbTruckDelivery size={20} color="black" />,
      logo2: <RiCustomerService2Fill size={20} color="black" />,
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
      logo1: <GiHamburgerMenu size={20} color="black" />,
      logo2: <RiNumbersFill size={20} color="black" />,
      logo3: <MdPendingActions size={20} color="black" />,
      logo4: <BsFillPrinterFill size={20} color="black" />,
      logo5: <TbReceiptTax size={20} color="black" />,
      logo6: <HiViewGrid size={20} color="black" />,
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
  return (
    <div>
      <Row>
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
      </Row>
    </div>
  );
}

export default Navbar;
