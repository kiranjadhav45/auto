import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InventoryPage from "./pages/inventoryPage";
import LoginPage from "./pages/loginPage";
import MastersPage from "./pages/masters";
import RegisterPage from "./pages/registerPage";
import Sales from "./pages/Sales";
import Sales2 from "./pages/Sales2";
import { withNamespaces } from "react-i18next";
// import MostSold from "./components/inventory/MostSold";
import Dashboard from "./pages/Dashboard";
import HRM from ".//pages/HRM";
import Account from ".//pages/Account";
import PreOrder from "./components/dashboard/PreOrder";

function App({ t }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preorder" element={<PreOrder />} />

          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/hrm" element={<HRM />} />
          <Route path="/account" element={<Account />} />
          <Route path="/masters" element={<MastersPage />} />
          {/* <Route path="/subReports" element={<MostSold />} /> */}
          <Route path="/" element={<RegisterPage />} />
          <Route path="/sales2" element={<Sales2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default withNamespaces()(App);
// export default App;
