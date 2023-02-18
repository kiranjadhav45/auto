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
import { withNamespaces } from "react-i18next";
import { isUser } from "../components/localStore/getCurrentUser";
import InvoiceMaster from "../components/masters/invMaster";
import ItemMaster from "../components/masters/itemMaster";
import MenuMaster from "../components/masters/menuMaster";
import SideMenu from "../components/ui/sideMenu";

function MastersPage({ t }) {
  const [allMasters, setAllMasters] = useState();
  const [currentTableHeaders, setCurrentTableHeaders] = useState();
  const [activeSubMenu, setActiveSubMenu] = useState("menu");
  const [currentSubMenu, setCurrentSubMenu] = useState();
  const [showModal, setShowModal] = useState(false);
  const [menuMaster, setMenuMaster] = useState();
  const [invMaster, setInvMaster] = useState({ start: "", end: "" });
  const [itemMasters, setItemMasters] = useState();
  const [runEffect, setRunEffect] = useState(0);
  const [findUser, setFindUser] = useState();

  const handleTopicChange = async (index) => {
    const temp = [...menuMaster];
    temp[index].status =
      temp[index].status === "active" ? "inactive" : "active";
    setMenuMaster(temp);
  };

  const handleSubTopicChange = async (indexI, indexJ, title) => {
    const temp = [...menuMaster];
    console.log("TEMP", indexI, indexJ);

    temp[indexI].subMenu[indexJ].status =
      temp[indexI].subMenu[indexJ].status === "active" ? "inactive" : "active";

    setMenuMaster(temp);
  };

  const handleItemsChange = async (target) => {
    const temp = [...menuMaster];

    let idn = temp.findIndex((i) => i.title === "Items");

    temp[idn][target] = temp[idn][target] === "active" ? "inactive" : "active";
    console.log("TEMP", temp);
    setMenuMaster(temp);
    setItemMasters(temp[idn]);
  };

  useEffect(() => {
    const getMaster = async () => {
      const test = isUser();
      console.log("IS USER", test);
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
    test.menu = menuMaster;
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

  return (
    <Container fluid className="bg-white font-ubu">
      <Row className="bg-white border-bottom">
        <Col className="bg-white col-1">
          <button className="headerButton ">
            <small className="text-dark fs-5 m-0 p-0 mx-1">N</small>
          </button>
        </Col>
        <Col className="bg-white col-7 ">
          <button className="headerButton ">
            <CiImport size={16} color="black" />
            <small className="text-dark m-0 p-0">{t("Import")}</small>
          </button>
          <button className="headerButton ">
            <CiExport size={16} color="black" />
            <small className="text-dark m-0 p-0">{t("Export")}</small>
          </button>
          <button className="headerButton">
            <CiSettings size={20} color="black" />
            <small className="text-dark m-0 p-0">{t("Settings")}</small>
          </button>
        </Col>
        <Col className="bg-white text-center">
          <button className="headerMenu mx-2">
            <strong className="text-blue m-1 p-1 mx-1 bg-veryLight">
              {t("Master Management")}
            </strong>
          </button>
        </Col>
        <Col className="bg-white col-8   text-end">
          <button className="headerButton">
            <CiBellOn size={20} color="orange" />
            <small className="text-dark m-0 p-0 mx-1">2000</small>
          </button>
          <button className="headerButton">
            <CiStar size={20} color="dodgerblue" />
            <small className="text-dark m-0 p-0 mx-1">120</small>
          </button>
          <button className="headerButton position-relative">
            <CiTrophy size={20} color="green" />
            <small className="text-dark m-0 p-0 mx-1">200</small>
            {/* <ListGroup className="onClickMenuBottom">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
          </button>
        </Col>
      </Row>

      <Row className="">
        <Col className="col-1 bg-white  border-end">
          <SideMenu />
        </Col>
        <Col className="col-18 bg-white ">
          <Row className="mt-2">
            <Col className="col-16">
              <ButtonGroup className="">
                <div className="mr-1">
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
                </div>

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
          <Row>
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
          </Row>
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
