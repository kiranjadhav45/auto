import Joi from "joi-browser";
import React, { Component, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { withNamespaces } from "react-i18next";

const LoginPage = ({ t }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
  };
  const [errors, setErrors] = useState();
  const validate = () => {
    const result = Joi.validate(loginForm, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const handleOnChange = (e) => {
    const errors1 = { ...errors };
    const errorMessage = validateProperty(e);
    if (errorMessage) errors1[e.target.name] = errorMessage;
    else delete errors1[e.target.name];
    const p = { ...loginForm };
    p[e.target.name] = e.target.value;
    setLoginForm(p);
    setErrors(errors1);
  };

  const verifyUser = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
    } else {
      // let response = await verifyUserAccount(loginForm);
      // console.log("Res", response);
      // if (response.data.status === "success") {
      //   localStorage.setItem("token", response.data.token);
      //   console.log("Account Logged In Successfully");
      // } else {
      //   console.log(response.data.ack);
      // }
    }
  };

  return (
    <Container className="font-ubu">
      <Row>
        <Col className="col-14">Naved</Col>
        <Col className=" text-center mt-5">
          <h2 className="mt-5">{t("title")}</h2>
          <small>{t("loginToContinue")}</small>
          <Form onSubmit={verifyUser} className="mt-5">
            <Row className="mb-2 mt-5">
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={loginForm.email}
                  name="email"
                  placeholder={t("enterEmailId")}
                  size="md"
                />
              </Col>

              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={loginForm.password}
                  name="password"
                  placeholder={t("enterPassword")}
                  size="md"
                />
              </Col>
            </Row>
            <Row>
              <div className="d-grid gap-2 mt-3">
                <Button variant="dark" type="submit" size="sm" className="p-1">
                  {t("loginToMyAccount")}
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withNamespaces()(LoginPage);
