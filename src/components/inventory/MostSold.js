import React from "react";
import { withNamespaces } from "react-i18next";

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
function MostSold({ t }) {
  return (
    <div>
      <Row>
        <Col className="col-18 bg-white ">
          <Row className="mt-2">
            <Col className="col-16">
              <ButtonGroup className="">
                <div className="mr-1">
                  <Form.Select
                    size="sm"
                    // onChange={(e) => setActiveSubMenu(e.target.value)}
                    aria-label="Default select example"
                  >
                    {/* {currentSubMenu &&
                      currentSubMenu.subMenu.map((i) => (
                        <option value={i.title}>{i.title} 2</option>
                      ))} */}
                    {/* <option value={10}>{t("Types")}</option>
                    <option value={10}>{t("Most Sold")}</option>
                    <option value={20}>{t("Exp Managment")}</option>
                    <option value={20}>{t("Rack Managment")}</option>
                    <option value={20}>{t("Dead Stock")}</option>
                    <option value={20}>{t("Return")}</option> */}
                  </Form.Select>
                </div>

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

                {/* <button class="menuButton">
                  <CiSettings size={16} color="black" />
                  <small className="text-dark m-0 p-0 mx-1">Settings</small>
                </button> */}
              </ButtonGroup>
            </Col>
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
                  {/* {currentTableHeaders &&
                    currentTableHeaders.map((i) => <th>{i.title}</th>)} */}
                </tr>
                {/* <tr>
                  <th data-priority="1">Languages</th>
                  <th data-priority="2">Population</th>
                  <th data-priority="3">Median Age</th>
                  <th data-priority="4">Area (Km²)</th>
                </tr> */}
              </thead>
              <tbody>
                <tr>
                  <td>Greece</td>
                  <td>Greek 99% (official), English, French</td>
                  <td>11,128,404</td>
                  <td>43.2</td>
                  <td>131,956</td>
                </tr>
                <tr>
                  <td>Luxembourg</td>
                  <td>
                    Luxermbourgish (national) French, German (both
                    administrative)
                  </td>
                  <td>536,761</td>
                  <td>39.1</td>
                  <td>2,586</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>Russian, others</td>
                  <td>142,467,651</td>
                  <td>38.4</td>
                  <td>17,076,310</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>Swedish, small Sami- and Finnish-speaking minorities</td>
                  <td>9,631,261</td>
                  <td>41.1</td>
                  <td>449,954</td>
                </tr>
                <tr>
                  <td>Argentina</td>
                  <td>Spanish (official), English, Italian, German, French</td>
                  <td>41,803,125</td>
                  <td>31.3</td>
                  <td>2,780,387</td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>English 79%, native and other languages</td>
                  <td>23,630,169</td>
                  <td>37.3</td>
                  <td>7,739,983</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>Greek 99% (official), English, French</td>
                  <td>11,128,404</td>
                  <td>43.2</td>
                  <td>131,956</td>
                </tr>
                <tr>
                  <td>Luxembourg</td>
                  <td>
                    Luxermbourgish (national) French, German (both
                    administrative)
                  </td>
                  <td>536,761</td>
                  <td>39.1</td>
                  <td>2,586</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>Russian, others</td>
                  <td>142,467,651</td>
                  <td>38.4</td>
                  <td>17,076,310</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>Swedish, small Sami- and Finnish-speaking minorities</td>
                  <td>9,631,261</td>
                  <td>41.1</td>
                  <td>449,954</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <Pagination className="float-end" size="sm">
            {items}
          </Pagination> */}
        </Col>
      </Row>
    </div>
  );
}

export default withNamespaces()(MostSold);
