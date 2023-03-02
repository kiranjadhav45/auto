import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import {
  CiBatteryCharging,
  CiBellOn,
  CiCircleList,
  CiExport,
  CiGrid31,
  CiImport,
  CiSettings,
  CiStar,
  CiTrophy,
  CiUnlock,
  CiUser,
  CiViewTimeline,
} from "react-icons/ci";

import { HiViewGrid, HiTemplate } from "react-icons/hi";
import { TbReceiptTax } from "react-icons/tb";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { withNamespaces } from "react-i18next";
import { isUser } from "../components/localStore/getCurrentUser";
import Navbar from "../components/common/Navbar";
import Nav2 from "../components/common/Nav2";
import SideMenu from "../components/ui/sideMenu";
import InvoiceMaster from "../components/masters/invMaster";
import ItemMaster from "../components/masters/itemMaster";
import MenuMaster from "../components/masters/menuMaster";
import Printers from "../components/masters/Printers";
import SellUnit from "../components/masters/SellUnit";
import TaxSlab from "../components/masters/TaxSlab";
import ViewMaster from "../components/masters/ViewMaster";
import { useSelector } from "react-redux";

function MastersPage({ t }) {
  const [allMasters, setAllMasters] = useState();
  const [currentTableHeaders, setCurrentTableHeaders] = useState();
  const [activeSubMenu, setActiveSubMenu] = useState("View Master");
  const [currentSubMenu, setCurrentSubMenu] = useState();
  const [showModal, setShowModal] = useState(false);
  const [invMaster, setInvMaster] = useState({ start: "", end: "" });
  const [itemMasters, setItemMasters] = useState();
  const [runEffect, setRunEffect] = useState(0);
  const [findUser, setFindUser] = useState();

  const iconSixe = 15;

  let p = localStorage.getItem("masters");
  let mastersMenu = JSON.parse(p);
  // console.log("object", mastersMenu);
  let mastersData = [
    {
      title: "Menu Master",
      logo: <GiHamburgerMenu size={iconSixe} color="black" />,
      showButton: mastersMenu.menuMasterChecked,
    },
    {
      title: "Sell Unit",
      logo: <RiNumbersFill size={iconSixe} color="black" />,
      showButton: mastersMenu.sellUnitChecked,
    },
    {
      title: "Invoice",
      logo: <MdPendingActions size={iconSixe} color="black" />,
      showButton: mastersMenu.invoiceChecked,
    },
    {
      title: "Printers",
      logo: <BsFillPrinterFill size={iconSixe} color="black" />,
      showButton: mastersMenu.printersChecked,
    },
    {
      title: "Tax Slab",
      logo: <TbReceiptTax size={iconSixe} color="black" />,
      showButton: mastersMenu.taxSlabChecked,
    },
    {
      title: "View Master",
      logo: <HiViewGrid size={iconSixe} color="black" />,
      showButton: true,
    },
    {
      title: "Items",
      logo: <HiTemplate size={iconSixe} color="black" />,
      showButton: mastersMenu.itemsChecked,
    },
  ];

  const handleTopicChange = async (index) => {
    // const temp = [...menuMaster];
    const temp = [];
    temp[index].status =
      temp[index].status === "active" ? "inactive" : "active";
    // setMenuMaster(temp);
  };

  const handleSubTopicChange = async (indexI, indexJ, title) => {
    // const temp = [...menuMaster];
    const temp = [];

    console.log("TEMP", indexI, indexJ);

    temp[indexI].subMenu[indexJ].status =
      temp[indexI].subMenu[indexJ].status === "active" ? "inactive" : "active";

    // setMenuMaster(temp);
  };

  const handleItemsChange = async (target) => {
    // const temp = [...menuMaster];
    const temp = [];

    let idn = temp.findIndex((i) => i.title === "Items");

    temp[idn][target] = temp[idn][target] === "active" ? "inactive" : "active";
    console.log("TEMP", temp);
    // setMenuMaster(temp);
    setItemMasters(temp[idn]);
  };

  const handleSubSubMenu = (data) => {
    setActiveSubMenu(data);
  };
  useEffect(() => {
    const getMaster = async () => {
      const test = isUser();
      // console.log("IS USER", test);
      setFindUser(test);
      // let res = await getMasterPerUser(test._id);

      // if (res.data) {
      //   setAllMasters(res.data.ack[0]);
      //   console.log("All Master", res.data.ack[0]);
      //   setMenuMaster(res.data.ack[0].menu);
      //   setInvMaster({
      //     start: res.data.ack[0].invoiceString.start,
      //     end: res.data.ack[0].invoiceString.end,
      //   });
      //   let ind = res.data.ack[0].menu.findIndex((i) => i.title === "Items");
      //   setItemMasters(res.data.ack[0].menu[ind]);

      //   let currentMenu = res.data.ack[0].menu.filter(
      //     (i) => i.title === "Inventory"
      //   );
      //   setCurrentSubMenu(currentMenu[0]);
      //   let test = currentMenu[0].subMenu.filter(
      //     (i) => i.title === activeSubMenu
      //   );

      //   setCurrentTableHeaders(test[0].fields);
      // }
    };

    getMaster();
  }, [activeSubMenu]);

  const handleChange = (e) => {
    const p = { ...invMaster };
    p[e.target.name] = e.target.value;
    setInvMaster(p);
  };
  const updateMaster = async (e) => {
    const test = {};
    test.clientId = findUser._id;
    // test.menu = menuMaster;
    // let result = await updateMasterPerUser(test);
    // if (result.data.status === "success") {
    // } else {
    //   console.log("Res", result.data.ack);
    // }
  };

  const updateInvData = async (e) => {
    e.preventDefault();
    let data = {};
    data.clientId = findUser._id;
    data.invoiceString = invMaster;
    // let test = await updateMasterPerUserInvString(data);
    // console.log("MSG", test.data);
  };

  // const message = useSelector((state) => state.messageReducer.message);
  // console.log("states message=", message);

  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="border-bottom">
        <Col className="mt-1 col-4">
          <Navbar />
        </Col>
        <Col>
          {mastersData &&
            mastersData.map((i, index) => {
              if (i.showButton !== true) {
              } else {
                return (
                  <>
                    <button
                      key={index}
                      className="headerButton mx-2"
                      value="20"
                      onClick={() => handleSubSubMenu(i.title)}
                    >
                      {i.logo}
                      <small className="text-black m-0 p-0 mx-1 mr-5 text-info">
                        {i.title}
                      </small>
                    </button>
                  </>
                );
              }
            })}

          {/*           
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(mastersData.title2)}
          >
            {mastersData.logo2}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {mastersData.title2}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(mastersData.title3)}
          >
            {mastersData.logo3}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {mastersData.title3}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(mastersData.title4)}
          >
            {mastersData.logo4}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {mastersData.title4}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(mastersData.title5)}
          >
            {mastersData.logo5}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {mastersData.title5}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(mastersData.title6)}
          >
            {mastersData.logo6}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {mastersData.title6}
            </small>
          </button>
          <button
            className="headerButton mx-2"
            value="20"
            onClick={() => handleSubSubMenu(mastersData.title7)}
          >
            {mastersData.logo7}
            <small className="text-black m-0 p-0 mx-1 mr-5">
              {mastersData.title7}
            </small>
          </button> */}
        </Col>
        <Col className="col-6">
          <Nav2 />
        </Col>
      </Row>

      <Row className="">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18 bg-white ">
          <Row className="mt-2">
            <Col className="col-16">
              {/* {activeSubMenu && activeSubMenu === "Menu Master" ? (
                <MenuMaster />
              ) : (
                ""
              )} */}

              {activeSubMenu && activeSubMenu === "Sell Unit" ? (
                <SellUnit />
              ) : (
                ""
              )}

              {/* {activeSubMenu && activeSubMenu === "Invoice" ? <InvoiceMaster /> : ""} */}
              {activeSubMenu && activeSubMenu === "Printers" ? (
                <Printers />
              ) : (
                ""
              )}

              {activeSubMenu && activeSubMenu === "Tax Slab" ? <TaxSlab /> : ""}

              {activeSubMenu && activeSubMenu === "View Master" ? (
                <ViewMaster />
              ) : (
                ""
              )}

              {/* {activeSubMenu && activeSubMenu === "Items" ? <ItemMaster /> : ""} */}

              <ButtonGroup className="">
                {/* <div className="mr-1">
                  <Form.Select
                    size="sm"
                    onChange={(e) => setActiveSubMenu(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="invoice">Invoice</option>
                    <option value="menu">Menu</option>
                    <option value="items">Items</option>
                    <option value="taxSlab">Tax Slab</option>
                    <option value="taxSlab">View Master</option>
                    <option value="taxSlab">Printers</option>
                    <option value="taxSlab">Sell Units</option>
                  </Form.Select>
                </div> */}

                {/* <button className="menuButton">
                  <CiSettings size={16} color="black" />
                  <small className="text-dark m-0 p-0 mx-1">Settings</small>
                </button> */}
              </ButtonGroup>
            </Col>
            {/* <Col>
              <ButtonGroup className=" float-end">
                <Button
                  className=" mx-2"
                  onClick={updateMaster}
                  variant="dark"
                  size="sm"
                >
                  Update Menu's
                </Button>
              </ButtonGroup>
            </Col> */}
          </Row>
          {/* <Row>
            {activeSubMenu === "menu" && menuMaster && (
              <MenuMaster
                menu={menuMaster}
                handleTopicChange={handleTopicChange}
                handleSubTopicChange={handleSubTopicChange}
              />
            )}

            {activeSubMenu === "invoice" && invMaster && (
              <InvoiceMaster
                inv={invMaster}
                updateInvData={updateInvData}
                handleChange={handleChange}
              />
            )}
            {activeSubMenu === "items" && itemMasters && (
              <ItemMaster
                itemMaster={itemMasters}
                handleTopicChange={handleTopicChange}
                handleSubTopicChange={handleSubTopicChange}
                handleItemsChange={handleItemsChange}
              />
            )}
          </Row> */}
        </Col>
        <Col className="col-4 bg-veryLight border-end">Nikhil</Col>
        <Col className="bg-veryLight col-1 ">
          <ButtonGroup vertical className="p-1">
            <div className="p-0 m-0 sideMenuIcon">
              <CiGrid31 size={25} className=" my-2" />
            </div>

            <div className="p-0 m-0 sideMenuIcon">
              <CiCircleList size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiBatteryCharging size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiUnlock size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiUser size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiViewTimeline size={20} className=" my-2" />
            </div>
            <div className="p-0 m-0 sideMenuIcon">
              <CiSettings size={20} className=" my-2" />
            </div>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default withNamespaces()(MastersPage);
