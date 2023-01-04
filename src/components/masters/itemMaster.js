import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

function ItemMaster({
  itemMaster,
  handleTopicChange,
  handleItemsChange,
  handleSubTopicChange,
}) {
  console.log("SSS", itemMaster);
  return (
    <Row className="mt-3">
      <Col className="col-12">
        <Card className="m-1 p-2">
          <strong>Choose What Best Describes Your Items</strong>
          <br />
          <Form.Check
            type="switch"
            className="mb-2"
            label="Do You Sell Expiry Products ?"
            name={itemMaster.expiry}
            checked={itemMaster.expiry === "active" ? true : false}
            onChange={() => handleItemsChange("expiry")}
          />
          <Form.Check
            type="switch"
            className="mb-2"
            label="Do You Want Barcodes For Your Products"
            name={itemMaster.barcode}
            checked={itemMaster.barcode === "active" ? true : false}
            onChange={() => handleItemsChange("barcode")}
          />

          <Form.Check
            type="switch"
            className="mb-2"
            label="Do You Need Rack Management ?"
            name={itemMaster.rack}
            checked={itemMaster.rack === "active" ? true : false}
            onChange={() => handleItemsChange("rack")}
          />
          <Row className="mt-2 mb-2">
            <strong> You Are Selling To</strong>
            <br />
            <Col>
              <Form.Check
                type="switch"
                className="mb-2"
                label="Customer"
                name={itemMaster.enduser}
                checked={itemMaster.enduser === "active" ? true : false}
              />
            </Col>

            <Col>
              <Form.Check
                type="switch"
                className="mb-2"
                label="Retailers"
                name={itemMaster.retail}
                checked={itemMaster.retail === "active" ? true : false}
                onChange={() => handleItemsChange("retail")}
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                className="mb-2"
                label="Wholesaler"
                name={itemMaster.wholesale}
                checked={itemMaster.wholesale === "active" ? true : false}
                onChange={() => handleItemsChange("wholesale")}
              />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col className="col-12">
        <Card className="m-1 p-2">
          <Row>
            <Col>
              <Form.Control
                className="mb-2"
                size="sm"
                name="end"
                placeholder="Unit Name"
              />
            </Col>
            <Col>
              <Form.Control
                className="mb-2"
                size="sm"
                name="end"
                placeholder="Count In The Unit"
              />
            </Col>
          </Row>

          <Button variant="veryLight" size="sm" className="mt-2 btn-block">
            Add Unit
          </Button>
        </Card>
        <Card className="m-1 p-2">
          <p>Rack Management</p>
          <Row>
            <Col className="col-18">
              <Form.Control
                className="mb-2"
                size="sm"
                name="end"
                placeholder="Add Rack Name"
              />
            </Col>
            <Col>
              <Button variant="veryLight" size="sm" className="mb-2 btn-block">
                Add Rack
              </Button>
            </Col>
          </Row>

          <Button variant="veryLight" size="sm" className="mb-2 btn-block">
            Add Unit
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default ItemMaster;
