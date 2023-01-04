import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

function MenuMaster({ menu, handleTopicChange, handleSubTopicChange }) {
  return (
    <Row className="mt-3">
      {menu.map((i, index) => (
        <Col className="col-8">
          <Card className="m-1 " id={index}>
            <Row className="mx-1">
              <Col>
                <strong>{i.title}</strong>
              </Col>
              <Col className="text-end">
                <Form.Check
                  type="switch"
                  id={index}
                  name={i.title}
                  onChange={(e) => handleTopicChange(index)}
                  checked={i.status === "active" ? true : false}
                />
              </Col>
            </Row>
            {i.status === "active" && (
              <Card.Body>
                {i.subMenu.map((j, i) => (
                  <Form.Check
                    inline
                    label={j.title}
                    checked={j.status === "active" ? true : false}
                    onChange={() => handleSubTopicChange(index, i, j.title)}
                    type="checkbox"
                  />
                ))}
              </Card.Body>
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MenuMaster;
