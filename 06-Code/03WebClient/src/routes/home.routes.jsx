import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ListProducts from "../pages/ListProducts";
import ListProviders from "../pages/ListProviders";
import ListCustomers from "../pages/ListCustomers";
import AddCustomer from "../pages/AddCustomer";
import AddProduct from "../pages/AddProduct";
import AddProvider from "../pages/AddProvider";
import NavBar from "../components/NavBar/NavBar";
import "../css/allPagesStyle.css";

const HomeRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/list" element={<ListProducts />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/providers/list" element={<ListProviders />} />
        <Route path="/providers/add" element={<AddProvider />} />
        <Route path="/customers/list" element={<ListCustomers />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default HomeRoutes;
