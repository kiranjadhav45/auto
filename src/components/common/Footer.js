import React from "react";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ButtonGroup, Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Row className="border-top bg-footer mt-1" style={{ height: "20vh" }}>
        <Col className="col-16 my-auto text-center ">
          {" "}
          © Copyright 2023 by{" "}
          <strong className="text-info"> Caliph Code</strong>
        </Col>
        <Col className="col-8 my-auto text-center">
          <ButtonGroup className="p-1 bg-footer">
            <Link to="/inventory">
              <div className="p-0 m-0 menuIcon bg-footer">
                <BsLinkedin size={25} className="mx-4" />
              </div>
            </Link>

            <Link>
              <div className="p-0 m-0 menuIcon bg-footer">
                <BsTwitter size={30} className="mx-4" />
              </div>
            </Link>

            <Link>
              <div className="p-0 m-0 menuIcon bg-footer">
                <RiInstagramFill size={30} className="mx-4" />
              </div>
            </Link>

            <Link to="/masters">
              <div className="p-0 m-0 menuIcon bg-footer">
                <BsFacebook size={25} className="mx-4" />
              </div>
            </Link>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
