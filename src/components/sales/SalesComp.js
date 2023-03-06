import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  ListGroup,
  Modal,
  Navbar,
  Popover,
  Row,
  Table,
} from "react-bootstrap";

function Sales() {
  const [searchProduct, setSearchProduct] = useState("");
  const [product, setProducts] = useState([
    {
      productName: "Product One",
      companyName: "Cipla",
      quantity: 100,
      expDate: "feb 25",
      price: 258,
      rackNo: 1001,
      Id: 2,
    },
    {
      productName: "Product Two",
      companyName: "Cadila",
      quantity: 254,
      expDate: "march 25",
      price: 32,
      rackNo: 1002,
      Id: 2,
    },
    {
      productName: "Product Three",
      companyName: "Zydus",
      quantity: 69,
      expDate: "feb 25",
      price: 91,
      rackNo: 1001,
      Id: 3,
    },
    {
      productName: "Product Four",
      companyName: "Cipla",
      quantity: 49,
      expDate: "feb 25",
      price: 34,
      rackNo: 1001,
      Id: 4,
    },
    {
      productName: "Product Five",
      companyName: "Arti Drugs",
      quantity: 45,
      expDate: "feb 25",
      price: 89,
      rackNo: 1001,
      Id: 5,
    },
    {
      productName: "Product Six",
      companyName: "Cipla",
      quantity: 78,
      expDate: "feb 25",
      price: 25,
      rackNo: 1001,
      Id: 6,
    },
    {
      productName: "Product Seven",
      companyName: "Lupin",
      quantity: 31,
      expDate: "feb 25",
      price: 89,
      rackNo: 1001,
      Id: 7,
    },
    {
      productName: "Product Eight",
      companyName: "Trigen",
      quantity: 89,
      expDate: "feb 25",
      price: 98,
      rackNo: 1001,
      Id: 8,
    },
    {
      productName: "Product Nine",
      companyName: "Cipla",
      quantity: 325,
      expDate: "feb 25",
      price: 85,
      rackNo: 1001,
      Id: 9,
    },
    {
      productName: "Product Ten",
      companyName: "sun Pharma",
      quantity: 66,
      expDate: "feb 25",
      price: 123,
      rackNo: 1001,
      Id: 10,
    },
  ]);

  const currentOrders = (food) => {
    setSearchProduct("");
    let currentInv = { ...food };
    currentInv.push(food);
    console.log(food);
  };
  return (
    <div>
      <Container
        fluid
        className="container-fluid min-vh-100 d-flex justify-content-md-center flex-column bg-veryLight"
      >
        <div className="row flex-grow-1">
          <div className="col z-ind">
            <Navbar.Text className="float-start mx-1">
              <Form.Select
                aria-label="Default select example"
                size="sm"
                className="borderInput border-0 bg-warning text-darker"
                // onChange={(e) => changeType(e)}
              >
                <option value="customer"> Customer Type</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="parlour">Parlour</option>
                <option value="customer">Customer</option>
              </Form.Select>
            </Navbar.Text>
            <Navbar.Text className="float-start mx-1">
              <Form.Control
                size="sm"
                type="text"
                name="searchBarcode"
                // onChange={(e) => setSearchBarcode(e.target.value)}
                placeholder="Search By Barcode"
                autoFocus
              />
            </Navbar.Text>
            <Navbar.Text className="float-end mx-1">
              <Button size="sm" variant="light" className="mx-2">
                {/* Inv No - {currentFullInvoice && currentFullInvoice.invoiceNumber} */}
                invoice No
              </Button>
              <Button
                size="sm"
                variant="darker"
                className="ml-2"
                // onClick={() => newBill()}
              >
                New Bill
              </Button>
            </Navbar.Text>
            <>
              <div className="mx-1 mt-5">
                {/* {orderType.length > 0 && ( */}

                <InputGroup className="mb-3  mt-5">
                  <Form.Control
                    placeholder="Search Products To Add To Bill"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="searchProduct"
                    size="sm"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                  />
                </InputGroup>
                {/* )} */}

                {searchProduct && (
                  <ListGroup
                    className="listG"
                    //  ref={wrapperRef}
                  >
                    {product &&
                      product.map((i, index) => (
                        <ListGroup.Item
                          className="listGO"
                          onClick={() => currentOrders(i)}
                        >
                          <strong className="mx-1"> {i.company} </strong>{" "}
                          {i.productName}
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                )}

                <Row>
                  <Form
                  // onSubmit={addItemInfo}
                  >
                    <Row>
                      <Col>
                        <Form.Control
                          size="sm"
                          name="productName"
                          // onChange={handleOnChange}
                          // value={addFoodForm.productName}
                          placeholder="Product Name"
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          size="sm"
                          name="mrp"
                          // onChange={handleOnChange}
                          // value={addFoodForm.mrp}
                          placeholder="Product Price"
                        />
                      </Col>
                      <Col>
                        <Button
                          type="submit"
                          size="sm"
                          className="float-end"
                          variant="light"
                        >
                          Add To Bill
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Row>
              </div>

              {/* Print section start */}
            </>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Sales;
