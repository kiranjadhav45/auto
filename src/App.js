import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InventoryPage from "./pages/inventoryPage";
import LoginPage from "./pages/loginPage";
import MastersPage from "./pages/masters";
import RegisterPage from "./pages/registerPage";
import Sales from "./pages/Sales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
