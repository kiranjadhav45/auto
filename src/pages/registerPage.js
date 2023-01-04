import Joi from "joi-browser";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import config from "../config.json";
function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    businessType: "",
  });

  const schema = {
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().required(),
    mobile: Joi.string().required(),
    email: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    businessType: Joi.string().required(),
  };
  const [errors, setErrors] = useState();
  const validate = () => {
    const result = Joi.validate(registerForm, schema, { abortEarly: false });
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
    const p = { ...registerForm };
    p[e.target.name] = e.target.value;
    setRegisterForm(p);
    setErrors(errors1);
  };

  const createUser = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
    } else {
      console.log("SSS");
      let newForm = { ...registerForm };
      let bType = newForm.businessType;
      newForm.bundle = config[bType];
      console.log("FORM", newForm);
      newForm.name = newForm.firstName + " " + newForm.lastName;
      delete newForm.firstName;
      delete newForm.lastName;

      // let response = await createUserAccount(newForm);
      // if (response.data.status === "success") {
      //   console.log("Account Created Successfully");
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
          <h2>Create Your Account</h2>
          <small>
            Lifetime Free Billing Application For Every Business ! <br />{" "}
            <strong> Auto Pilot We Call It !</strong>
          </small>
          <Form onSubmit={createUser} className="mt-5">
            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.firstName}
                  name="firstName"
                  placeholder="First name"
                  size="md"
                />
              </Col>
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.lastName}
                  name="lastName"
                  placeholder="Last name"
                  size="md"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.mobile}
                  name="mobile"
                  placeholder="Your Mobile No"
                  size="md"
                />
              </Col>
              <Col>
                <Form.Select
                  onChange={handleOnChange}
                  value={registerForm.businessType}
                  name="businessType"
                  aria-label="Default select example"
                  size="md"
                >
                  <option>Choose Your Business Category</option>
                  <option value="medical">Medical</option>
                  <option value="salon">Salon</option>
                  <option value="shop">Shop</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.userName}
                  name="userName"
                  placeholder="Choose Your User Name"
                  size="md"
                />
              </Col>
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.email}
                  name="email"
                  placeholder="Your Email Id"
                  size="md"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.password}
                  name="password"
                  placeholder="Setup Your Account Password"
                  size="md"
                />
              </Col>
              <Col>
                <Form.Control
                  onChange={handleOnChange}
                  value={registerForm.confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm Your Password Again"
                  size="md"
                />
              </Col>
            </Row>
            <Row>
              <div className="d-grid gap-2 mt-3">
                <Button variant="dark" type="submit" size="sm" className="p-1">
                  Create & Setup My Account
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
