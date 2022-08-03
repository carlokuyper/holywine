import Dashboard from "./components/Dashboard";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Stock from "./components/Stock";
import CheckoutPage from "./components/CheckoutPage";

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
