import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/slices/navslice";

function ViewMaster() {
  const [stateDashboard, setStateDashboard] = useState({
    PreOrderChecked: false,
    ServiceDashChecked: false,
    pendingsettlementsChecked: false,
  });
  const [statesale, setStatesale] = useState({
    salesChecked: false,
    ServiceChecked: false,
    maintainanceChecked: false,
  });
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
    //Dashboard Data
    let dashboardData = { ...stateDashboard };
    if (value === "Pre-Order") dashboardData.PreOrderChecked = checked;
    if (value === "DashBoard Service")
      dashboardData.ServiceDashChecked = checked;
    if (value === "pending Settlements")
      dashboardData.pendingsettlementsChecked = checked;
    setStateDashboard(dashboardData);
    //Sales Data
    let salesData = { ...statesale };
    if (value === "sales") salesData.salesChecked = checked;
    if (value === "Sales Service") salesData.ServiceChecked = checked;
    if (value === "maintainance") salesData.maintainanceChecked = checked;
    setStatesale(salesData);
    //masters Data
    let masterData = { ...stateMaster };
    if (value === "menuMaster") masterData.menuMasterChecked = checked;
    if (value === "sellUnit") masterData.sellUnitChecked = checked;
    if (value === "invoice") masterData.invoiceChecked = checked;
    if (value === "printers") masterData.printersChecked = checked;
    if (value === "TaxSlab") masterData.taxSlabChecked = checked;
    if (value === "Items") masterData.itemsChecked = checked;
    // console.log("onchange", masterData);
    setStateMaster(masterData);

    //Account Data
    let accountData = { ...stateAccount };
    if (value === "settleBill") accountData.settleBillChecked = checked;
    if (value === "transaction") accountData.transactionChecked = checked;
    if (value === "credit") accountData.creditChecked = checked;
    if (value === "debit") accountData.debitChecked = checked;
    if (value === "report") accountData.reportChecked = checked;
    // console.log("accountdata", accountData);
    setStateAccount(accountData);

    // HRM data
    let HRMData = { ...stateHRM };
    if (value === "Customer") HRMData.CustomerChecked = checked;
    if (value === "Supplier") HRMData.SupplierChecked = checked;
    if (value === "Staff") HRMData.StaffChecked = checked;
    setStateHRM(HRMData);
    // console.log("hrm data", HRMData);

    //Inventory Data
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

  // useEffect(() => {
  //   let p = localStorage.getItem("masters");
  //   let z = JSON.parse(p);
  //   masters[0].checked = z.menuMasterChecked;
  //   masters[1].checked = z.sellUnitChecked;
  //   masters[2].checked = z.invoiceChecked;
  //   masters[3].checked = z.printersChecked;
  //   masters[4].checked = z.taxSlabChecked;
  //   masters[5].checked = z.itemsChecked;
  // }, []);

  const dashboard = [
    { title: "Pre-Order", checked: "" },
    { title: "DashBoard Service", checked: "" },
    { title: "pending Settlements", checked: "" },
  ];
  const sales = [
    { title: "sales", checked: "" },
    { title: "Sales Service", checked: "" },
    { title: "maintainance", checked: "" },
  ];
  const masters = [
    { title: "menuMaster", checked: "" },
    { title: "sellUnit", checked: "" },
    { title: "invoice", checked: "" },
    { title: "printers", checked: "" },
    { title: "TaxSlab", checked: "" },
    { title: "Items", checked: "" },
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
    // Dashboard setting local Storage  data
    let dashboard = { ...stateDashboard };
    localStorage.setItem("dashboard", JSON.stringify(dashboard));
    console.log("dashboard", dashboard);
    // Sales setting local Storage data
    let sales = { ...statesale };
    localStorage.setItem("sales", JSON.stringify(sales));
    console.log("sales", sales);
    // Masters setting local Storage data
    let master = { ...stateMaster };
    localStorage.setItem("masters", JSON.stringify(master));
    // Account setting local Storage data
    let account = { ...stateAccount };
    localStorage.setItem("account", JSON.stringify(account));
    // HRM setting local Storage data
    let HRM = { ...stateHRM };
    localStorage.setItem("HRM", JSON.stringify(HRM));
    // Inventory setting local Storage data
    let inventory = { ...stateInventory };
    localStorage.setItem("inventory", JSON.stringify(inventory));
    alert("Saved Successfully");
  };

  return (
    <div>
      <Row className="m-4">
        <Col className="text-start col-12">
          <h6>Dashboard Setting</h6>
          <div>
            {dashboard &&
              dashboard.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      // checked={i.checked}
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.title}
                    />
                    <label>{i.title}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
        <Col className="text-start col-12">
          <h6>Sales Setting</h6>
          <div>
            {sales &&
              sales.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.title}
                    />
                    <label>{i.title}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
      <Row className="m-4">
        <Col className="text-start col-12">
          <h6>Masters Setting</h6>
          <div>
            {masters &&
              masters.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      // checked={i.checked}
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.title}
                    />
                    <label>{i.title}</label>
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
