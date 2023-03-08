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
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  Cell,
  AreaChart,
  Area,
  LabelList,
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

  const quaterlyData = [
    { name: "Q1", water: 10, elecricity: 5000 },
    { name: "Q2", water: 15, elecricity: 5500 },
    { name: "Q3", water: 12, elecricity: 5200 },
    { name: "Q4", water: 20, elecricity: 10000 },
  ];
  const cData = [
    {
      name: "product one",
      profit: 300,
      month: "Jan",
      revenue: 850,
      water: 10,
      elecricity: 5000,
    },
    {
      name: "product two",
      profit: 350,
      month: "Feb",
      revenue: 910,
      water: 12,
      elecricity: 5050,
    },
    {
      name: "product three",
      profit: 320,
      month: "March",
      revenue: 900,
      water: 15,
      elecricity: 5200,
    },
    {
      name: "product four",
      profit: 390,
      month: "April",
      revenue: 940,
      water: 13,
      elecricity: 5400,
    },
    {
      name: "product five",
      profit: 450,
      month: "May",
      revenue: 960,
      water: 19,
      elecricity: 5100,
    },
    {
      name: "product six",
      profit: 370,
      month: "June",
      revenue: 1000,
      water: 15,
      elecricity: 5000,
    },
    {
      name: "product seven",
      profit: 550,
      month: "July",
      revenue: 1200,
      water: 17,
      elecricity: 5300,
    },
    {
      name: "product eight",
      profit: 610,
      month: "Aug",
      revenue: 1100,
      water: 22,
      elecricity: 5700,
    },
    {
      name: "product nine",
      profit: 620,
      month: "Sep",
      revenue: 1200,
      water: 25,
      elecricity: 6000,
    },
    {
      name: "product ten",
      profit: 590,
      month: "Oct",
      revenue: 1360,
      water: 27,
      elecricity: 5900,
    },
    {
      name: "product eleven",
      profit: 650,
      month: "Nov",
      revenue: 1350,
      water: 25,
      elecricity: 6200,
    },
    {
      name: "product twelve",
      profit: 700,
      month: "Dec",
      revenue: 1400,
      water: 29,
      elecricity: 6500,
    },
  ];
  let COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
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
                {/* water chart */}
                <div className="dashboard-box1">
                  <ResponsiveContainer>
                    <AreaChart
                      data={quaterlyData}
                      margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                    >
                      <defs>
                        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="water"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#water)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Col>
              <Col className="">
                <div className=" dashboard-box1">
                  {/* Electricity chart */}
                  <ResponsiveContainer>
                    <AreaChart
                      data={quaterlyData}
                      margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                    >
                      <defs>
                        <linearGradient
                          id="elecricity"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#82ca9d"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#82ca9d"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <Area
                        type="monotone"
                        dataKey="elecricity"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#elecricity)"
                      />
                      <Legend />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                {/* Profit Line Chart */}
                <div className="dashboard-box2">
                  <ResponsiveContainer>
                    <LineChart
                      data={cData}
                      margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
                    >
                      <YAxis />
                      <Tooltip />
                      <XAxis dataKey="month" />
                      <Legend />
                      <Line type="monotone" dataKey="profit" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                {/* Bar Revenue And Profit Chart */}
                <div className="dashboard-box2">
                  <ResponsiveContainer>
                    <BarChart
                      data={cData}
                      margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="revenue" fill="#8884d8" />
                      <Bar dataKey="profit" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="10">
            <Row className="mb-4">
              <Col>
                {" "}
                {/* Pie Chart */}
                <div className="dashboard-box3">
                  <ResponsiveContainer>
                    <PieChart
                      margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
                    >
                      <Pie
                        data={Expenses}
                        dataKey="value"
                        nameKey="name"
                        fill="#8884d8"
                        cx="50%"
                        cy="50%"
                        Label
                      >
                        {Expenses.map((entry, index) => {
                          return (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            >
                              <LabelList dataKey="name" position="inside" />
                            </Cell>
                          );
                        })}
                      </Pie>
                      <Legend />

                      <Label
                        value="Expences"
                        offset={0}
                        position="bottom"
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
