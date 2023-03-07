import React from "react";
import { Container, Row, Col, Form, Tooltip } from "react-bootstrap";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Label,
} from "recharts";

function Service() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let time = date.getTime();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let fulldate = `${day}/${month}/${year}`;
  let fulltime = `${hours}:${minutes}:${seconds} ${ampm}`;

  const cData = [
    { name: "product one", sales: 300, month: "Jan", revenue: 850 },
    { name: "product two", sales: 350, month: "Feb", revenue: 910 },
    { name: "product three", sales: 320, month: "March", revenue: 900 },
    { name: "product four", sales: 390, month: "April", revenue: 940 },
    { name: "product five", sales: 450, month: "May", revenue: 960 },
    { name: "product six", sales: 370, month: "June", revenue: 1000 },
    { name: "product seven", sales: 550, month: "July", revenue: 1200 },
    { name: "product eight", sales: 610, month: "Aug", revenue: 1100 },
    { name: "product nine", sales: 620, month: "Sep", revenue: 1200 },
    { name: "product ten", sales: 590, month: "Oct", revenue: 1360 },
    { name: "product eleven", sales: 650, month: "Nov", revenue: 1350 },
    { name: "product twelve", sales: 700, month: "Dec", revenue: 1400 },
  ];

  const Expenses = [
    {
      name: "Salary",
      value: 200,
    },
    {
      name: "Electricity",
      value: 100,
    },
    {
      name: "Water",
      value: 70,
    },
    {
      name: "Maintance",
      value: 50,
    },
    {
      name: "Others",
      value: 150,
    },
  ];
  return (
    <div>
      <Container>
        <Row className="m-3">
          <Col>
            <small className="mx-2">{fulldate}</small>
            <small>{fulltime}</small>
          </Col>
          <Col className="float-end col-md-4 search-bar-dashboard">
            <Form.Control placeholder="Search" size="sm" />
          </Col>
        </Row>
        <Row>
          <Col className="14">
            <Row className="mb-4">
              <Col className="">
                <div className="dashboard-box1">Water</div>
              </Col>
              <Col className="">
                <div className=" dashboard-box1">Electricity</div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                <div className="dashboard-box2">
                  <ResponsiveContainer>
                    <LineChart
                      data={cData}
                      margin={{ top: 5, right: 25, left: 0, bottom: 5 }}
                    >
                      <YAxis />
                      <Tooltip />
                      <XAxis dataKey="month" />
                      <Line type="monotone" dataKey="sales" />
                    </LineChart>
                  </ResponsiveContainer>
                  <h6>Sales FY 22-23</h6>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                <div className="dashboard-box2">Net Profit</div>
              </Col>
            </Row>
          </Col>
          <Col className="10">
            <Row className="mb-4">
              <Col>
                {" "}
                <div className="dashboard-box3">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={Expenses}
                        dataKey="value"
                        nameKey="name"
                        fill="#8884d8"
                      />
                      <Label
                        value="name"
                        offset={0}
                        position="inside"
                        fill="#000000"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                {" "}
                <div className="dashboard-box3">Resource usage cost</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
