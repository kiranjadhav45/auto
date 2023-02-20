import React from "react";
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

function Rightsidemenu() {
  return (
    <Row>
      <Col className="col-20 bg-veryLight border-end">Nikhil</Col>
      <Col className="bg-veryLight col-4 ">
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
  );
}

export default Rightsidemenu;
