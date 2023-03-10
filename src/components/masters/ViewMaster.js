import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/slices/navslice";
import jwtDecode from "jwt-decode";
import { FaAngleDown } from "react-icons/fa";

function ViewMaster() {
  let token = localStorage.getItem("auth")
    ? localStorage.getItem("auth")
    : "auth token not found";
  let decoded = jwtDecode(token) ? jwtDecode(token) : "can`t decode jwt";

  let dashboardtitle = decoded.bundle[0].subMenu
    ? decoded.bundle[0].subMenu
    : "can`t resolve accountTitle";

  let salestitle = decoded.bundle[1].subMenu
    ? decoded.bundle[1].subMenu
    : "can`t resolve accountTitle";

  let getInventoryData = decoded.bundle[2].subMenu
    ? decoded.bundle[2].subMenu
    : "can`t resolve accountTitle";

  // console.log("getInventoryData", getInventoryData);

  const [inventoryMenuCheaked, setInventoryMenuCheaked] = useState("");
  useEffect(() => {
    if (
      localStorage.getItem("inventory_Menu") === undefined ||
      localStorage.getItem("inventory_Menu") === null
    ) {
      console.log("local storage undefined or null in inventory page");
    } else {
      let p = localStorage.getItem("inventory_Menu");
      let z = JSON.parse(p);
      setInventoryMenuCheaked(z);
      console.log("z", z);
    }
  }, []);

  const [pagesStatus, setPagesStatus] = useState({
    Dashboard: "",
    Sales: "",
    Inventory: "",
    items: "",
    HRM: "",
    Accounts: "",
    Masters: "",
  });

  const [inSubMenuMostSold, setInSubMenuMostSold] = useState({
    ItemName: false,
    QtySold: false,
    QtyRemained: false,
  });
  const [inSubMenuExpManage, setInSubMenuExpManage] = useState({
    ItemName: false,
    ExpireOn: false,
    QtyRemained: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [preOrder, setPreOrder] = useState("");
  const [dashboardMenu, setDashboardMenu] = useState("");

  const [stateDashboard, setStateDashboard] = useState({
    PreOrder: false,
    Service: false,
    pendingsettlements: false,
  });

  const [salesState, setSalesState] = useState({
    Sales: false,
    Service: false,
    Maintainance: false,
  });

  const [stateInventory, setStateInventory] = useState({
    MostSold: false,
    ExpiryManagement: false,
    RackManagement: false,
    DeadStock: false,
    Unsold: false,
    Return: false,
  });
  // console.log("salesState", salesState);
  // const handleMapOnChange = (e) => {
  //   const value = e.target.value;
  //   const checked = e.target.checked;
  //   const prevCheckedItems = { ...checkedItems };
  //   setCheckedItems({ ...checkedItems, [value]: checked });
  //   console.log("checkedItems", checkedItems);

  //   if (!checked && prevCheckedItems[value]) {
  //     setCheckedItems((prevState) => {
  //       const newState = { ...prevState };
  //       const childItems = setInventoryData.find((i) => i.id === value)?.fields;
  //       if (childItems) {
  //         childItems.forEach((item) => {
  //           newState[item.id] = false;
  //         });
  //       }
  //       return newState;
  //     });
  //   }
  // };

  //👇👇👇👇👇 Pages function start 👇👇👇👇👇

  const handleOnPagesChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    let data = { ...pagesStatus };
    if (value === "Dashboard") data.Dashboard = checked;
    if (value === "Sales") data.Sales = checked;
    if (value === "Inventory") data.Inventory = checked;
    if (value === "items") data.items = checked;
    if (value === "HRM") data.HRM = checked;
    if (value === "Accounts") data.Accounts = checked;
    if (value === "Masters") data.Masters = checked;
    setPagesStatus(data);
  };

  //👇👇👇👇👇 Dashboard functions start 👇👇👇👇👇

  const handleOnDashboardMenuChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    let data = { ...stateDashboard };
    if (value === "Previous Orders") data.PreOrder = checked;
    if (value === "Total Sales") data.Service = checked;
    if (value === "Pending Settlements") data.pendingsettlements = checked;
    setStateDashboard(data);
  };
  const onDashboardSubmit = () => {
    let dashboard = { ...stateDashboard };
    localStorage.setItem("dashboard_Menu", JSON.stringify(dashboard));
    setShowAlert(true);
    hideAlertAfterDelay(2000);
    let data = { ...pagesStatus };
    data.Dashboard = false;
    setPagesStatus(data);
  };

  //👇👇👇👇👇 sales function start 👇👇👇👇👇

  const handleOnSalesMenuChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    let data = { ...salesState };

    if (value === "Sales") data.Sales = checked;
    if (value === "Service") data.Service = checked;
    if (value === "Maintainance") data.Maintainance = checked;
    setSalesState(data);
  };

  const onSalesSubmit = () => {
    let ddsales = { ...salesState };
    console.log("ddsales", ddsales);
    localStorage.setItem("sales_Menu", JSON.stringify(ddsales));
    setShowAlert(true);
    hideAlertAfterDelay(2000);
  };

  // 👇👇👇👇👇 Inventory functions start 👇👇👇👇👇

  const handleOnInventoryMenuChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    let data = { ...stateInventory };
    if (value === "Most Sold") data.MostSold = checked;
    if (value === "Expiry Management") data.ExpiryManagement = checked;
    if (value === "Rack Management") data.RackManagement = checked;
    if (value === "Dead Stock") data.DeadStock = checked;
    if (value === "Unsold") data.Unsold = checked;
    if (value === "Return") data.Return = checked;
    setStateInventory(data);
  };

  const onInventorySubmit = () => {
    let inventory = { ...stateInventory };
    localStorage.setItem("inventory_Menu", JSON.stringify(inventory));

    let mostSold = { ...inSubMenuMostSold };
    localStorage.setItem("most_Sold", JSON.stringify(mostSold));

    setShowAlert(true);
    hideAlertAfterDelay(2000);
  };

  const handleOnMostSold = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    let data = { ...inSubMenuMostSold };
    if (value === "Item Name") data.ItemName = checked;
    if (value === "Qty Sold") data.QtySold = checked;
    if (value === "Qty Remained") data.QtyRemained = checked;
    setInSubMenuMostSold(data);
  };

  // 👇👇👇👇👇 Alert timeOut function start 👇👇👇👇👇
  const hideAlertAfterDelay = (delay) => {
    setTimeout(() => {
      setShowAlert(false);
    }, delay);
  };
  return (
    <>
      <div>
        <Row>
          <Col>
            <div className="mx-2">
              <input
                className="mx-2"
                type="checkbox"
                onChange={handleOnPagesChange}
                value="Dashboard"
              />
              <label>
                <strong>Dashboard</strong>
              </label>
            </div>
            {pagesStatus.Dashboard === true ? (
              <div className="mx-4">
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnDashboardMenuChange}
                    value={dashboardtitle[0].title}
                  />
                  <label>{dashboardtitle[0].title}</label>
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnDashboardMenuChange}
                    value={dashboardtitle[1].title}
                  />
                  <label>{dashboardtitle[1].title}</label>
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnDashboardMenuChange}
                    value={dashboardtitle[2].title}
                  />
                  <label>{dashboardtitle[2].title}</label>
                </div>
                <Button size="sm" onClick={onDashboardSubmit}>
                  Save & Close
                </Button>
              </div>
            ) : (
              ""
            )}
          </Col>
          <Col>
            <div className="mx-2">
              <input
                className="mx-2"
                type="checkbox"
                onChange={handleOnPagesChange}
                value="Sales"
              />
              <label>
                <strong>Sales</strong>
              </label>
            </div>
            {pagesStatus.Sales === true ? (
              <div className="mx-4">
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnSalesMenuChange}
                    value={salestitle[0].title}
                  />
                  <label>{salestitle[0].title}</label>
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnSalesMenuChange}
                    value={salestitle[1].title}
                  />
                  <label>{salestitle[1].title}</label>
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnSalesMenuChange}
                    value={salestitle[2].title}
                  />
                  <label>{salestitle[2].title}</label>
                </div>
                <Button size="sm" onClick={onSalesSubmit}>
                  Save
                </Button>
              </div>
            ) : (
              ""
            )}
          </Col>
          <Col>
            <div className="mx-2">
              <input
                className="mx-2"
                type="checkbox"
                onChange={handleOnPagesChange}
                value="Inventory"
              />
              <label>
                <strong>Inventory</strong>
              </label>
            </div>
            {pagesStatus.Inventory === true ? (
              <div className="mx-4">
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    // checked={inventoryMenuCheaked}
                    onChange={handleOnInventoryMenuChange}
                    value={getInventoryData[0].title}
                  />
                  <label>{getInventoryData[0].title}</label>
                  {/* 😍😍😍😍😍 inventory sub menu 👉👉👉"MostSold"👈👈👈  😍😍😍😍😍 */}
                  {stateInventory && stateInventory.MostSold === true ? (
                    <div className="mx-4">
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnMostSold}
                          value={getInventoryData[0].fields[0].title}
                        />
                        <label>{getInventoryData[0].fields[0].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnMostSold}
                          value={getInventoryData[0].fields[1].title}
                        />
                        <label>{getInventoryData[0].fields[1].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnMostSold}
                          value={getInventoryData[0].fields[2].title}
                        />
                        <label>{getInventoryData[0].fields[2].title}</label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnInventoryMenuChange}
                    value={getInventoryData[1].title}
                  />
                  <label>{getInventoryData[1].title}</label>
                  {/*😍😍😍😍😍 inventory sub menu 👉👉👉"ExpiryManagement"👈👈👈😍😍😍😍 */}
                  {stateInventory &&
                  stateInventory.ExpiryManagement === true ? (
                    <div className="mx-4">
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          // onChange={handleOnInSubMenuChange}
                          value={getInventoryData[1].fields[0].title}
                        />
                        <label>{getInventoryData[1].fields[0].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          // onChange={handleOnInSubMenuChange}
                          value={getInventoryData[1].fields[1].title}
                        />
                        <label>{getInventoryData[1].fields[1].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          // onChange={handleOnInSubMenuChange}
                          value={getInventoryData[1].fields[2].title}
                        />
                        <label>{getInventoryData[1].fields[2].title}</label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnInventoryMenuChange}
                    value={getInventoryData[2].title}
                  />
                  <label>{getInventoryData[2].title}</label>
                  {/*😍😍😍😍😍 inventory sub menu 3😍😍😍😍 */}
                  {stateInventory && stateInventory.RackManagement === true ? (
                    <div className="mx-4">
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[2].fields[0].title}
                        />
                        <label>{getInventoryData[2].fields[0].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[2].fields[1].title}
                        />
                        <label>{getInventoryData[2].fields[1].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[2].fields[2].title}
                        />
                        <label>{getInventoryData[2].fields[2].title}</label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnInventoryMenuChange}
                    value={getInventoryData[3].title}
                  />
                  <label>{getInventoryData[3].title}</label>
                  {/*😍😍😍😍😍 inventory sub menu 4😍😍😍😍 */}
                  {stateInventory && stateInventory.DeadStock === true ? (
                    <div className="mx-4">
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[3].fields[0].title}
                        />
                        <label>{getInventoryData[3].fields[0].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[3].fields[1].title}
                        />
                        <label>{getInventoryData[3].fields[1].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[3].fields[2].title}
                        />
                        <label>{getInventoryData[3].fields[2].title}</label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnInventoryMenuChange}
                    value={getInventoryData[4].title}
                  />
                  <label>{getInventoryData[4].title}</label>
                  {/*😍😍😍😍😍 inventory sub menu 5😍😍😍😍 */}
                  {stateInventory && stateInventory.Unsold === true ? (
                    <div className="mx-4">
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[4].fields[0].title}
                        />
                        <label>{getInventoryData[4].fields[0].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[4].fields[1].title}
                        />
                        <label>{getInventoryData[4].fields[1].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[4].fields[2].title}
                        />
                        <label>{getInventoryData[4].fields[2].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[4].fields[3].title}
                        />
                        <label>{getInventoryData[4].fields[3].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[4].fields[4].title}
                        />
                        <label>{getInventoryData[4].fields[4].title}</label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    onChange={handleOnInventoryMenuChange}
                    value={getInventoryData[5].title}
                  />
                  <label>{getInventoryData[5].title}</label>
                  {/*😍😍😍😍😍 inventory sub menu 6😍😍😍😍 */}
                  {stateInventory && stateInventory.Return === true ? (
                    <div className="mx-4">
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[0].title}
                        />
                        <label>{getInventoryData[5].fields[0].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[1].title}
                        />
                        <label>{getInventoryData[5].fields[1].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[2].title}
                        />
                        <label>{getInventoryData[5].fields[2].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[3].title}
                        />
                        <label>{getInventoryData[5].fields[3].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[4].title}
                        />
                        <label>{getInventoryData[5].fields[4].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[5].title}
                        />
                        <label>{getInventoryData[5].fields[5].title}</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          className="mx-2"
                          type="checkbox"
                          onChange={handleOnSalesMenuChange}
                          value={getInventoryData[5].fields[6].title}
                        />
                        <label>{getInventoryData[5].fields[6].title}</label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Button size="sm" onClick={onInventorySubmit}>
                  Save
                </Button>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
      {showAlert && showAlert === true ? (
        <div class="alert alert-success fixed-bottom" role="alert">
          Saved successfully
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ViewMaster;
