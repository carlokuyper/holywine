import Dashboard from "./components/Dashboard";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Stock from "./components/Stock";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutShiping from "./components/CheckoutShiping";

import {Routes, Route} from 'react-router-dom';
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/CheckoutShiping" element={<CheckoutShiping />} />
      </Routes>
    </div>
  );
}

export default App;
