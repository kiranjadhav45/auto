import React from "react";
import { Card, Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";
import { withNamespaces } from "react-i18next";
function InvoiceMaster({ inv, updateInvData, handleChange, t }) {
  return (
    <Row className=" mt-3">
      <Col className="col-12 text-center">
        <strong className="border-bottom mb-2">
          {" "}
          {t("Update Invoice No")}
        </strong>
        <Row className="p-1 mt-2 m-1 border">
          <div className="mb-2">
            <small className="float-start">{t("Curr. Invoice No.")}</small>
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
              placeholder={t("Starting String")}
            />
          </Col>
          <Col>
            <Form.Control
              className="mb-2"
              size="sm"
              name="end"
              value={inv.end}
              onChange={handleChange}
              placeholder={t("Ending String")}
            />
          </Col>
          <Col>
            <Button
              variant="veryLight"
              onClick={updateInvData}
              size="sm"
              className="btn-block"
            >
              {t("Update Inv No")}
            </Button>
          </Col>
        </Row>
      </Col>
      <Col className="col-12 text-center">
        <strong className="border-bottom mb-2">
          {t(" Choose Print Style")}
        </strong>
        <Row className="p-1 mt-2 m-1 border">
          <div className="mb-2">
            <small className="float-start">{t("Curr. Printer Style")}</small>
            <small className="float-end"></small>
          </div>
          <Col>
            <ButtonGroup size="sm" aria-label="Basic example">
              <Button variant="secondary">{t("Left")}</Button>
              <Button variant="secondary">{t("Middle")}</Button>
              <Button variant="secondary">{t("Right")}</Button>
            </ButtonGroup>
          </Col>

          <Col>
            <Button
              variant="veryLight"
              onClick={updateInvData}
              size="sm"
              className="btn-block"
            >
              {t("Select")}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default withNamespaces()(InvoiceMaster);
