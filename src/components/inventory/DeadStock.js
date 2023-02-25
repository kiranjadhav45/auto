import React from "react";
import { withNamespaces } from "react-i18next";
import { Row, Col, Form, ButtonGroup } from "react-bootstrap";
import { CiSquarePlus, CiPlay1, CiFilter, CiSearch } from "react-icons/ci";
import { RiArrowUpDownFill } from "react-icons/ri";

function DeadStock({ t }) {
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
              onChange={(e) => {
                // console.log(e.target.value);
              }}
              aria-label="Default select example"
            >
              <option value={"Sun Pharmaceutical"}>
                {t("Sun Pharmaceutical")}
              </option>
              <option value={"Dr. Reddy's"}>{t("Dr. Reddy's")}</option>
              <option value={"Cipla"}>{t("Cipla")}</option>
              <option value={"Torrent Pharmaceuticals"}>
                {t("Torrent Pharmaceuticals ")}
              </option>
              <option value={"Zydus"}>{t("Zydus ")}</option>
              <option value={"Lupin"}>{t("Lupin ")}</option>
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
              <th data-priority="2">
                Product Name
                <button className="headerButton mx-2 float-end">
                  <RiArrowUpDownFill size={17} />
                </button>
              </th>
              <th data-priority="3">
                Company Name
                <button className="headerButton mx-2">
                  <RiArrowUpDownFill size={17} />
                </button>
              </th>
              <th data-priority="4">Rack No</th>
              <th data-priority="4">
                Quantity
                <button className="headerButton mx-2">
                  <RiArrowUpDownFill size={17} />
                </button>
              </th>
            </tr>
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
                Luxermbourgish (national) French, German (both administrative)
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
                Luxermbourgish (national) French, German (both administrative)
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
    </div>
  );
}

export default withNamespaces()(DeadStock);
