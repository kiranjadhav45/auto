import React, { useEffect, useState } from "react";
import { withNamespaces } from "react-i18next";
import jwtDecode from "jwt-decode";

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
  FormSelect,
} from "react-bootstrap";
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
import { RiArrowUpDownFill } from "react-icons/ri";
import Pagination from "react-bootstrap/Pagination";
import { setMessage } from "../../redux/slices/navslice";

function MostSold({ t, items, currentFullInvoice }) {
  const [mostSoldMenu, setMostSoldMenu] = useState("");
  const [data, setData] = useState(currentFullInvoice);
  const [order, setOrder] = useState("ASC");

  let token = localStorage.getItem("auth")
    ? localStorage.getItem("auth")
    : "auth token not found in inventory page";
  let decoded = jwtDecode(token)
    ? jwtDecode(token)
    : "can`t decode jwt in most sold page";
  let mostSoldSubMenuTitle = decoded.bundle[3].subMenu[0].fields
    ? decoded.bundle[3].subMenu[0].fields
    : "can`t find inventorySubmenu in most sold page";

  console.log("inventoryMostSoldSubMenu", mostSoldSubMenuTitle);
  useEffect(() => {
    if (
      localStorage.getItem("most_Sold") === undefined ||
      localStorage.getItem("most_Sold") === null
    ) {
      console.log("local storage undefined or null in most sold page");
    } else {
      let p = localStorage.getItem("most_Sold");
      let z = JSON.parse(p);
      setMostSoldMenu(z);
      console.log(z);
      console.log("mostSoldMenu", mostSoldMenu);
    }
  }, []);

  // sorting function
  const handleSortData = (col) => {
    if (col === "Quantity") {
      if (order === "ASC") {
        const sorted = [...data];
        let result = sorted.sort((a, b) => (a.quantity > b.quantity ? 1 : -1));
        setOrder("DES");
        setData(result);
      }
      if (order === "DES") {
        const sorted = [...data];
        let result = sorted.sort((a, b) => (a.quantity < b.quantity ? 1 : -1));
        setOrder("ASC");
        setData(result);
      }
    }
    if (col === "Total Amount") {
      if (order === "ASC") {
        const sorted = [...data];
        let result = sorted.sort((a, b) =>
          a.quantity * a.price > b.quantity * b.price ? 1 : -1
        );
        setOrder("DES");
        setData(result);
      }
      if (order === "DES") {
        const sorted = [...data];
        let result = sorted.sort((a, b) =>
          a.quantity * a.price < b.quantity * b.price ? 1 : -1
        );
        setOrder("ASC");
        setData(result);
      }
    }
  };
  return (
    <div>
      <Row>
        <Col className=" bg-white ">
          <Row className="mt-2">
            <Col className="col-7">
              <ButtonGroup className="">
                <div className="mr-1"></div>

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
              </ButtonGroup>
            </Col>
            <Col className="col-4 float-end">
              <Form.Control size="sm" type="text" placeholder="Search" />
            </Col>
            <Col className=""></Col>

            <Col>
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
                <Form.Select
                  className="FliterMonths mx-1"
                  size="sm"
                  style={{ width: "10px" }}
                  onChange={(e) => console.log(e.target.value)}
                  aria-label="Default select example"
                >
                  <option value={"This Month"}>{t("This Month")}</option>
                  <option value={"This Quarter"}>{t("This Quarter")}</option>
                  <option value={"This Year"}>{t("This Year")}</option>
                </Form.Select>
                <div>
                  <Form.Select size="sm" aria-label="Default select example">
                    <option>10</option>
                    <option value="10">25</option>
                    <option value="25">50</option>
                    <option value="50">100</option>
                  </Form.Select>
                </div>
              </ButtonGroup>
            </Col>
          </Row>
          <div
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
                  <th data-priority="1">Sr No</th>
                  {mostSoldMenu.ItemName === true ? (
                    <th data-priority="2">{mostSoldSubMenuTitle[0].title}</th>
                  ) : (
                    ""
                  )}

                  {mostSoldMenu.QtySold === true ? (
                    <th data-priority="3">
                      Sold Quantity{" "}
                      <button
                        className="headerButton mx-2"
                        onClick={() => {
                          handleSortData("Quantity");
                        }}
                      >
                        <RiArrowUpDownFill size={17} />
                      </button>
                    </th>
                  ) : (
                    ""
                  )}

                  {mostSoldMenu.QtyRemained === true ? (
                    <th data-priority="4">
                      QTY Remaining{" "}
                      <button
                        className="headerButton mx-2"
                        onClick={() => {
                          handleSortData("Total Amount");
                        }}
                      >
                        <RiArrowUpDownFill size={17} />
                      </button>
                    </th>
                  ) : (
                    ""
                  )}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {mostSoldMenu.ItemName === true ? (
                          <td>{item.productName}</td>
                        ) : (
                          ""
                        )}
                        {mostSoldMenu.QtySold === true ? (
                          <td>{item.quantity}</td>
                        ) : (
                          ""
                        )}

                        {mostSoldMenu.QtyRemained === true ? (
                          <td>{item.quantity}</td>
                        ) : (
                          ""
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination className="float-end" size="sm">
            {items}
          </Pagination>
        </Col>
      </Row>
    </div>
  );
}

export default withNamespaces()(MostSold);
