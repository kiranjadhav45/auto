import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, Row, ListGroup } from "react-bootstrap";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import { CiBellOn, CiStar, CiTrophy } from "react-icons/ci";
import { FcSalesPerformance, FcExpired } from "react-icons/fc";
import { GrHostMaintenance, GrVmMaintenance, GrLanguage } from "react-icons/gr";
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
import { CgProfile } from "react-icons/cg";
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

function Navbar({ t }) {
  const iconSixe = 15;
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [isOpen, updateIsOpen] = useState(false);
  const [profileDropDwon, setProfileDropDwon] = useState("");
  const [language, setLanguage] = useState(false);
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
    logo1: <BsFillCartCheckFill size={iconSixe} color="black" />,
    logo2: <MdOutlineMiscellaneousServices size={iconSixe} color="black" />,
    logo3: <MdPendingActions size={iconSixe} color="black" />,
    logo4: "",
    logo5: "",
    logo6: "",
  });
  const navigate = useNavigate();
  const handleOnNavigation = () => {
    if (activeSubMenu && activeSubMenu === "dashboard") {
      // setSubMenu(dashboardData);
    } else if (activeSubMenu && activeSubMenu === "sales") {
      // setSubMenu(salesData);
    } else if (activeSubMenu && activeSubMenu === "inventory") {
      // setSubMenu(inventoryData);
    } else if (activeSubMenu && activeSubMenu === "taxSlab") {
      // setSubMenu(taxSlabData);
    } else if (activeSubMenu && activeSubMenu === "hrm") {
      // setSubMenu(hrmData);
    } else if (activeSubMenu && activeSubMenu === "accounts") {
      // setSubMenu(accountsData);
    } else if (activeSubMenu && activeSubMenu === "masters") {
      // setSubMenu(mastersData);
      // navigate("/masters");
    }
  };

  useEffect(() => {
    console.log(profileDropDwon);
    let dashboardData = {
      title1: "Pre-Order",
      title2: "Service",
      title3: "pending settlements",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <TbTruckDelivery size={iconSixe} color="black" />,
      logo2: <RiCustomerService2Fill size={iconSixe} color="black" />,
      logo3: <MdPendingActions size={iconSixe} color="black" />,
    };
    let salesData = {
      title1: "Sales",
      title2: "Total Sales",
      title3: "Maintenance",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <FcSalesPerformance size={iconSixe} color="black" />,
      logo2: <BiTrendingUp size={iconSixe} color="black" />,
      logo3: <GrVmMaintenance size={iconSixe} color="black" />,
    };
    let inventoryData = {
      title1: "Most Sold",
      title2: "Exp Managment",
      title3: "Rack Managment",
      title4: "Dead Stocks",
      title5: "Returns",
      path1: "/subReports",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <BiTrendingUp size={iconSixe} color="black" />,
      logo2: <FcExpired size={iconSixe} color="black" />,
      logo3: <BsHddRackFill size={iconSixe} color="black" />,
      logo4: <HiArrowSmDown size={iconSixe} color="black" />,
      logo5: <TbTruckReturn size={iconSixe} color="black" />,
    };
    let taxSlabData = {
      title1: "Sales",
      title2: "Total Sales",
      title3: "Maintenance",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <FcSalesPerformance size={iconSixe} color="black" />,
      logo2: <BiTrendingUp size={iconSixe} color="black" />,
      logo3: <GrVmMaintenance size={iconSixe} color="black" />,
    };
    let hrmData = {
      title1: "Customer",
      title2: "Supplier",
      title3: "Staff",
      path1: "/lastOrders",
      path2: "/totalSales",
      path3: "/Maintainance",
      logo1: <ImProfile size={iconSixe} color="black" />,
      logo2: <FaTruckMoving size={iconSixe} color="black" />,
      logo3: <RiTeamFill size={iconSixe} color="black" />,
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
      logo1: <RiBillFill size={iconSixe} color="black" />,
      logo2: <AiOutlineTransaction size={iconSixe} color="black" />,
      logo3: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
      logo4: <BsFillCreditCard2FrontFill size={iconSixe} color="black" />,
      logo5: <TbReportAnalytics size={iconSixe} color="black" />,
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
      logo1: <GiHamburgerMenu size={iconSixe} color="black" />,
      logo2: <RiNumbersFill size={iconSixe} color="black" />,
      logo3: <MdPendingActions size={iconSixe} color="black" />,
      logo4: <BsFillPrinterFill size={iconSixe} color="black" />,
      logo5: <TbReceiptTax size={iconSixe} color="black" />,
      logo6: <HiViewGrid size={iconSixe} color="black" />,
    };

    if (activeSubMenu && activeSubMenu === "dashboard") {
      setSubMenu(dashboardData);
      navigate("/dashboard");
    } else if (activeSubMenu && activeSubMenu === "sales") {
      setSubMenu(salesData);
      navigate("/sales");
    } else if (activeSubMenu && activeSubMenu === "inventory") {
      setSubMenu(inventoryData);
      navigate("/inventory");
    } else if (activeSubMenu && activeSubMenu === "taxSlab") {
      setSubMenu(taxSlabData);
    } else if (activeSubMenu && activeSubMenu === "hrm") {
      setSubMenu(hrmData);
      navigate("/hrm");
    } else if (activeSubMenu && activeSubMenu === "accounts") {
      setSubMenu(accountsData);
      navigate("/account");
    } else if (activeSubMenu && activeSubMenu === "masters") {
      setSubMenu(mastersData);
      navigate("/masters");
    }
  }, [activeSubMenu]);

  const changeLanguage = (lng) => {
    console.log(lng);
    // i18n.changeLanguage(lng);
    setLanguage(false);
  };

  const handleOnProfile = (value) => {
    updateIsOpen(false);
    console.log(value);
  };
  console.log(submenu);

  return (
    <div>
      <Row>
        <Col className="col-1">
          <strong>Auto</strong>
        </Col>
        <Col className="col-2 mx-1">
          <Form.Select
            size="sm"
            className="Form-select-main formSelect-Navbar"
            onChange={(e) => setActiveSubMenu(e.target.value)}
            aria-label="Default select example"
          >
            <option value="dashboard">{t("Dashboard")}</option>
            <option value="sales">{t("Sales")}</option>
            <option value="inventory">{t("Inventory")}</option>
            <option value="taxSlab">{t("items")}</option>
            <option value="hrm">{t("HRM")}</option>
            <option value="accounts">{t("Accounts")}</option>
            <option value="masters">{t("Masters")}</option>
          </Form.Select>
        </Col>
        <Col className="text-start">
          <Link to={submenu.path1} className="m-0 p-0">
            <button className="headerButton mx-2">
              {submenu.logo1}
              <small className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title1}
              </small>
            </button>
          </Link>
          <Link to={submenu.path2}>
            <button className="headerButton mx-2">
              {submenu.logo2}
              <small className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title2}
              </small>
            </button>
          </Link>
          <Link to={submenu.path3}>
            <button className="headerButton mx-2">
              {submenu.logo3}
              <small className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title3}
              </small>
            </button>
          </Link>
          <Link to={submenu.path4}>
            <button className="headerButton mx-2">
              {submenu.logo4}
              <small className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title4}
              </small>
            </button>
          </Link>
          <Link to={submenu.path5}>
            <button className="headerButton mx-2">
              {submenu.logo5}
              <small className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title5}
              </small>
            </button>
          </Link>
          <Link to={submenu.path6}>
            <button className="headerButton mx-2">
              {submenu.logo6}
              <small className="text-black m-0 p-0 mx-1 mr-5">
                {submenu.title6}
              </small>
            </button>
          </Link>
        </Col>

        <Col className="text-end col-6">
          <button className="headerButton">
            <CiBellOn size={iconSixe} color="orange" />
            <small className="text-dark m-0 p-0 mx-1">2000</small>
          </button>

          <button className="headerButton">
            <CiStar size={iconSixe} color="dodgerblue" />
            <small className="text-dark m-0 p-0 mx-1">120</small>
          </button>

          <button className="headerButton position-relative">
            <CiTrophy size={iconSixe} color="green" />
            <small className="text-dark m-0 p-0 mx-1">200</small>
          </button>
          <button
            class="headerButton profile-inventory position-relative"
            // onClick={updateIsOpen(true)}
            onMouseOver={() => updateIsOpen(true)}
            // onFocus={() => updateIsOpen(true)}
            onMouseLeave={() => updateIsOpen(false)}
            // onBlur={() => updateIsOpen(false)}
            // toggle={() => updateIsOpen(!isOpen)}
            // isOpen={isOpen}
          >
            <CgProfile size={iconSixe} color="green" />
            <small className="text-dark m-0 p-0 mx-1">Kiran</small>
            {isOpen === true ? (
              <ListGroup
                className="onClickMenuBottom profile-inventory-items  "
                onClick={(e) => setProfileDropDwon(e.target.value)}
                // value={isOpen}
              >
                <ListGroup.Item
                  to="#"
                  onClick={(e) => handleOnProfile(e.target.value)}
                >
                  {t("My Profiles")}
                </ListGroup.Item>
                <ListGroup.Item
                  onClick={(e) => handleOnProfile(e.target.value)}
                >
                  {t("Orders")}
                </ListGroup.Item>
                <ListGroup.Item
                  onClick={(e) => handleOnProfile(e.target.value)}
                >
                  {t("Watchlist")}
                </ListGroup.Item>
                <ListGroup.Item
                  onClick={(e) => handleOnProfile(e.target.value)}
                >
                  {t("Notification")}
                </ListGroup.Item>
                <ListGroup.Item
                  onClick={(e) => handleOnProfile(e.target.value)}
                >
                  {t("Logout")}
                </ListGroup.Item>
              </ListGroup>
            ) : (
              ""
            )}
          </button>
          <button
            class="headerButton language-dropdown position-relative"
            onMouseOver={() => setLanguage(true)}
            onMouseLeave={() => setLanguage(false)}
          >
            <GrLanguage />
            <small className="text-dark m-0 p-0 mx-1"></small>
            {language === true ? (
              <ListGroup
                className="onClickMenuBottom profile-inventory-items  "
                // onClick={(e) => setProfileDropDwon(e.target.value)}
              >
                <ListGroup.Item
                  value={"en"}
                  onClick={(e) => changeLanguage(e.target.value)}
                >
                  Eng
                </ListGroup.Item>
                <ListGroup.Item
                  value={"ar"}
                  onClick={(e) => changeLanguage(e.target.value)}
                >
                  Ar
                </ListGroup.Item>
              </ListGroup>
            ) : (
              ""
            )}
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default withNamespaces()(Navbar);
