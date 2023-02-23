import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Col, Form, Row, ListGroup } from "react-bootstrap";
import { withNamespaces } from "react-i18next";

import { BsFillCartCheckFill } from "react-icons/bs";

import {
  MdPendingActions,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { setMessage } from "../../redux/slices/navslice";

function Navbar({
  t,
  dashboardData,
  salesData,
  inventoryData,
  taxSlabData,
  hrmData,
  accountsData,
  mastersData,
}) {
  const iconSixe = 15;
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const [submenu, setSubMenu] = useState({
    path1: "",
    path2: "",
    path3: "",
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
  const dispatch = useDispatch();
  useEffect(() => {
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
    dispatch(setMessage(activeSubMenu));
  }, [activeSubMenu]);

  return (
    <div>
      <Row>
        <Col>
          <strong>Auto</strong>
        </Col>
        <Col>
          <Form.Select
            size="sm"
            className="Form-select-main formSelect-Navbar"
            onChange={(e) => setActiveSubMenu(e.target.value)}
            aria-label="Default select example"
          >
            <option value="dashboard">{t("")}</option>
            <option value="dashboard">{t("Dashboard")}</option>
            <option value="sales">{t("Sales")}</option>
            <option value="inventory">{t("Inventory")}</option>
            <option value="taxSlab">{t("items")}</option>
            <option value="hrm">{t("HRM")}</option>
            <option value="accounts">{t("Accounts")}</option>
            <option value="masters">{t("Masters")}</option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
}

export default withNamespaces()(Navbar);
