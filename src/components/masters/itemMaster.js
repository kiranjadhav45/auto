import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { withNamespaces } from "react-i18next";
function ItemMaster({
  itemMaster,
  handleTopicChange,
  handleItemsChange,
  handleSubTopicChange,
  t,
}) {
  console.log("SSS", itemMaster);
  return (
    <Row className="mt-3">
      <Col className="col-12">
        <Card className="m-1 p-2">
          <strong>{t("Choose What Best Describes Your Items")}</strong>
          <br />
          <Form.Check
            type="switch"
            className="mb-2"
            label={t("Do You Sell Expiry Products ?")}
            name={itemMaster.expiry}
            checked={itemMaster.expiry === "active" ? true : false}
            onChange={() => handleItemsChange("expiry")}
          />
          <Form.Check
            type="switch"
            className="mb-2"
            label={t("Do You Want Barcodes For Your Products")}
            name={itemMaster.barcode}
            checked={itemMaster.barcode === "active" ? true : false}
            onChange={() => handleItemsChange("barcode")}
          />

          <Form.Check
            type="switch"
            className="mb-2"
            label={t("Do You Need Rack Management ?")}
            name={itemMaster.rack}
            checked={itemMaster.rack === "active" ? true : false}
            onChange={() => handleItemsChange("rack")}
          />
          <Row className="mt-2 mb-2">
            <strong> {t("You Are Selling To")}</strong>
            <br />
            <Col>
              <Form.Check
                type="switch"
                className="mb-2"
                label={t("Customer")}
                name={itemMaster.enduser}
                checked={itemMaster.enduser === "active" ? true : false}
              />
            </Col>

            <Col>
              <Form.Check
                type="switch"
                className="mb-2"
                label={t("Retailers")}
                name={itemMaster.retail}
                checked={itemMaster.retail === "active" ? true : false}
                onChange={() => handleItemsChange("retail")}
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                className="mb-2"
                label={t("Wholesaler")}
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
                placeholder={t("Unit Name")}
              />
            </Col>
            <Col>
              <Form.Control
                className="mb-2"
                size="sm"
                name="end"
                placeholder={t("Count In The Unit")}
              />
            </Col>
          </Row>

          <Button variant="veryLight" size="sm" className="mt-2 btn-block">
            {t("Add Unit")}
          </Button>
        </Card>
        <Card className="m-1 p-2">
          <p>{t("Rack Management")}</p>
          <Row>
            <Col className="col-18">
              <Form.Control
                className="mb-2"
                size="sm"
                name="end"
                placeholder={t("Add Rack Name")}
              />
            </Col>
            <Col>
              <Button variant="veryLight" size="sm" className="mb-2 btn-block">
                {t("Add Rack")}
              </Button>
            </Col>
          </Row>

          <Button variant="veryLight" size="sm" className="mb-2 btn-block">
            {t("Add Unit")}
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
export default withNamespaces()(ItemMaster);
