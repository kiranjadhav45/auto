import React from "react";
import { Card, Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";

function InvoiceMaster({ inv, updateInvData, handleChange }) {
  return (
    <Row className=" mt-3">
      <Col className="col-12 text-center">
        <strong className="border-bottom mb-2"> Update Invoice No</strong>
        <Row className="p-1 mt-2 m-1 border">
          <div className="mb-2">
            <small className="float-start">Curr. Invoice No.</small>
            <small className="float-end">
              {inv.start}
              {inv.end}
            </small>
          </div>
          <Col>
            <Form.Control
              className="mb-1"
              size="sm"
              name="start"
              value={inv.start}
              onChange={handleChange}
              placeholder="Starting String"
            />
          </Col>
          <Col>
            <Form.Control
              className="mb-2"
              size="sm"
              name="end"
              value={inv.end}
              onChange={handleChange}
              placeholder="Ending String"
            />
          </Col>
          <Col>
            <Button
              variant="veryLight"
              onClick={updateInvData}
              size="sm"
              className="btn-block"
            >
              Update Inv No
            </Button>
          </Col>
        </Row>
      </Col>
      <Col className="col-12 text-center">
        <strong className="border-bottom mb-2"> Choose Print Style</strong>
        <Row className="p-1 mt-2 m-1 border">
          <div className="mb-2">
            <small className="float-start">Curr. Printer Style</small>
            <small className="float-end"></small>
          </div>
          <Col>
            <ButtonGroup size="sm" aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Col>

          <Col>
            <Button
              variant="veryLight"
              onClick={updateInvData}
              size="sm"
              className="btn-block"
            >
              Select
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default InvoiceMaster;
