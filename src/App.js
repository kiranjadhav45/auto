import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InventoryPage from "./pages/inventoryPage";
import LoginPage from "./pages/loginPage";
import MastersPage from "./pages/masters";
import RegisterPage from "./pages/registerPage";
import Sales from "./pages/Sales";
import Sales2 from "./pages/Sales2";
import { withNamespaces } from "react-i18next";

function App({ t }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/masters" element={<MastersPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/" element={<RegisterPage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales2" element={<Sales2 />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default withNamespaces()(App);
// export default App;
