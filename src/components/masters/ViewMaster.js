import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/slices/navslice";

function ViewMaster() {
  const [stateMaster, setStateMaster] = useState({
    menuMasterChecked: false,
    sellUnitChecked: false,
    invoiceChecked: false,
    printersChecked: false,
    taxSlabChecked: false,
    itemsChecked: false,
  });
  const [stateAccount, setStateAccount] = useState({
    settleBillChecked: false,
    transactionChecked: false,
    creditChecked: false,
    debitChecked: false,
    reportChecked: false,
  });
  const [stateHRM, setStateHRM] = useState({
    CustomerChecked: false,
    SupplierChecked: false,
    StaffChecked: false,
  });
  const [stateInventory, setStateInventory] = useState({
    MostSoldChecked: false,
    ExpManagmentChecked: false,
    RackManagmentChecked: false,
    DeadStocksChecked: false,
    UnSoldStockChecked: false,
    ReturnsChecked: false,
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    let masterData = { ...stateMaster };
    if (value === "menuMaster") masterData.menuMasterChecked = checked;
    if (value === "sellUnit") masterData.sellUnitChecked = checked;
    if (value === "invoice") masterData.invoiceChecked = checked;
    if (value === "printers") masterData.printersChecked = checked;
    if (value === "TaxSlab") masterData.taxSlabChecked = checked;
    if (value === "Items") masterData.itemsChecked = checked;
    // console.log("onchange", masterData);
    setStateMaster(masterData);
    let accountData = { ...stateAccount };
    if (value === "settleBill") accountData.settleBillChecked = checked;
    if (value === "transaction") accountData.transactionChecked = checked;
    if (value === "credit") accountData.creditChecked = checked;
    if (value === "debit") accountData.debitChecked = checked;
    if (value === "report") accountData.reportChecked = checked;
    // console.log("accountdata", accountData);
    setStateAccount(accountData);
    let HRMData = { ...stateHRM };
    if (value === "Customer") HRMData.CustomerChecked = checked;
    if (value === "Supplier") HRMData.SupplierChecked = checked;
    if (value === "Staff") HRMData.StaffChecked = checked;
    setStateHRM(HRMData);
    // console.log("hrm data", HRMData);
    let inventoryData = { ...stateInventory };
    if (value === "MostSold") inventoryData.MostSoldChecked = checked;
    if (value === "ExpManagment") inventoryData.ExpManagmentChecked = checked;
    if (value === "RackManagment") inventoryData.RackManagmentChecked = checked;
    if (value === "DeadStocks") inventoryData.DeadStocksChecked = checked;
    if (value === "UnSoldStock") inventoryData.UnSoldStockChecked = checked;
    if (value === "Returns") inventoryData.ReturnsChecked = checked;
    setStateInventory(inventoryData);
    // console.log("inventory data", inventoryData);
  };

  const masters = [
    { value: "menuMaster" },
    { value: "sellUnit" },
    { value: "invoice" },
    { value: "printers" },
    { value: "TaxSlab" },
    { value: "Items" },
  ];
  const account = [
    { value: "settleBill" },
    { value: "transaction" },
    { value: "credit" },
    { value: "debit" },
    { value: "report" },
  ];
  const HRM = [
    { value: "Customer" },
    { value: "Supplier" },
    { value: "Staff" },
  ];
  const inventory = [
    { value: "MostSold" },
    { value: "ExpManagment" },
    { value: "RackManagment" },
    { value: "DeadStocks" },
    { value: "UnSoldStock" },
    { value: "Returns" },
  ];
  const onSubmit = () => {
    let master = { ...stateMaster };
    localStorage.setItem("masters", JSON.stringify(master));
    let account = { ...stateAccount };
    localStorage.setItem("account", JSON.stringify(account));
    let HRM = { ...stateHRM };
    localStorage.setItem("HRM", JSON.stringify(HRM));
    let inventory = { ...stateInventory };
    localStorage.setItem("inventory", JSON.stringify(inventory));
    alert("Saved Successfully");
    console.log(inventory);
  };

  return (
    <div>
      <Row className="m-4">
        <Col className="text-start col-12">
          <h6>Masters Setting</h6>
          <div>
            {masters &&
              masters.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.value}
                    />
                    <label>{i.value}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
        <Col className="text-start col-12">
          <h6>Account Setting</h6>
          <div>
            {account &&
              account.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.value}
                    />
                    <label>{i.value}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
      <Row className="m-4">
        <Col className="text-start col-12">
          <h6>HRM</h6>
          <div>
            {HRM &&
              HRM.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.value}
                    />
                    <label>{i.value}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
        <Col className="text-start col-12">
          <h6>Inventory</h6>
          <div>
            {inventory &&
              inventory.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.value}
                    />
                    <label>{i.value}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
      <Button size="sm" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default ViewMaster;
