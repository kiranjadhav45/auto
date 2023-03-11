import React, { useEffect, useState } from "react";
import { withNamespaces } from "react-i18next";
import { Row, Col, Form, ButtonGroup } from "react-bootstrap";
import { CiSquarePlus, CiPlay1, CiFilter, CiSearch } from "react-icons/ci";
import { RiArrowUpDownFill } from "react-icons/ri";

function ExpManagment({ t, currentFullInvoice }) {
  const [expiryManagementMenu, setExpiryManagementMenu] = useState("");
  useEffect(() => {
    if (
      localStorage.getItem("expiry_Management") === undefined ||
      localStorage.getItem("expiry_Management") === null
    ) {
      console.log("local storage undefined or null in most sold page");
    } else {
      let p = localStorage.getItem("expiry_Management");
      let z = JSON.parse(p);
      setExpiryManagementMenu(z);
      console.log(z);
      console.log("ExpiryManagementMenu", expiryManagementMenu);
    }
  }, []);

  const data = [...currentFullInvoice];
  return (
    <div>
      <Row className="mt-2  ">
        <Col className="col-7">
          <ButtonGroup className="">
            <button class="menuButton mx-2">
              <CiPlay1 size={16} color="black" />
              <small className="text-dark m-0 p-0 mx-1">577 {t("Items")}</small>
            </button>

            <button class="menuButton mx-2">
              <CiSquarePlus size={16} color="black" />
              <small className="text-dark m-0 p-0 mx-1">{t("Add New")}</small>
            </button>
          </ButtonGroup>
        </Col>
        <Col className="col-4 float-end ">
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
              <small className="text-dark m-0 p-0 mx-1">{t("Filters")}</small>
            </button>
            <Form.Select
              className="FliterMonths mx-1"
              size="sm"
              style={{ width: "10px" }}
              // onChange={(e) => setActiveSubMenu(e.target.value)}
              aria-label="Default select example"
            >
              <option value={10}>{t("This Month")}</option>
              <option value={10}>{t("This Quarter")}</option>
              <option value={20}>{t("This Year")}</option>
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
      <div className="mt-2 table-responsive" data-pattern="priority-columns">
        <table
          summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality"
          className="table table-bordered table-hover"
        >
          {" "}
          <thead>
            <tr>
              <th data-priority="1">Sr No</th>
              {expiryManagementMenu.ItemName === true ? (
                <th data-priority="2">Product Name</th>
              ) : (
                ""
              )}

              {expiryManagementMenu.ExpireOn === true ? (
                <th data-priority="3">
                  Expire On{" "}
                  <button className="headerButton mx-2">
                    <RiArrowUpDownFill size={17} />
                  </button>
                </th>
              ) : (
                ""
              )}

              {expiryManagementMenu.QtyRemained === true ? (
                <th data-priority="4">Quantity Remained</th>
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
                    {expiryManagementMenu.ItemName === true ? (
                      <td>{item.productName}</td>
                    ) : (
                      ""
                    )}
                    {expiryManagementMenu.ExpireOn === true ? (
                      <td>{item.quantity}</td>
                    ) : (
                      ""
                    )}

                    {expiryManagementMenu.QtyRemained === true ? (
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
    </div>
  );
}

export default withNamespaces()(ExpManagment);
