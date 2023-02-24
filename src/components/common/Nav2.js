import React, { useEffect, useState } from "react";
import { withNamespaces } from "react-i18next";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import { GrLanguage } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiTrophy } from "react-icons/ci";
import { CiStar, CiBellOn } from "react-icons/ci";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Profile from "../ui/Profile";

function Nav2({ t }) {
  const [isOpen, updateIsOpen] = useState(false);
  const [language, setLanguage] = useState(false);
  const [profileDropDwon, setProfileDropDwon] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const iconSixe = 15;
  const changeLanguage = (lng) => {
    console.log(lng);
    // i18n.changeLanguage(lng);
    setLanguage(false);
  };
  const handleOnProfile = (value) => {
    updateIsOpen(false);
    console.log(value);
    setShowProfile(true);
  };

  return (
    <div>
      <Col className="text-end">
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
              <ListGroup.Item to="#" onClick={handleShow}>
                {t("My Profiles")}
              </ListGroup.Item>
              {/* <ListGroup.Item onClick={(e) => handleOnProfile()}>
                {t("Orders")}
              </ListGroup.Item> */}
              {/* <ListGroup.Item onClick={(e) => handleOnProfile(e.target.value)}>
                {t("Watchlist")}
              </ListGroup.Item> */}
              <ListGroup.Item onClick={(e) => handleOnProfile("Notification")}>
                {t("Notification")}
              </ListGroup.Item>
              <ListGroup.Item onClick={(e) => handleOnProfile("Logout")}>
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
      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>{<Profile />}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default withNamespaces()(Nav2);
