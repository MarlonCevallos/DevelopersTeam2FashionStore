/* Author: Marlon Cevallos*/

import ProductItem from "../components/Products/ProductItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/axiosProducts";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const _getProducts = async () => {
    const _products = await getProducts();
    setProducts(_products);
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");

    _getProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Reporte de Ventas</h1>

      <table className="table table-info mt-4">
        <thead>
          <tr>
            <th className="text-center">NOMBRE</th>
            <th className="text-center">DESCRIPCIÓN</th>
            <th className="text-center">PRECIO</th>
            <th className="text-center">CANTIDAD</th>
            <th className="text-center">GANANCIAS</th>
            <th className="text-center">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              getProducts={_getProducts}
            />
          ))}
        </tbody>
      </table>
      <NavLink to="/products/add">
        <button className="btn btn-success">Agregar</button>
      </NavLink>

      {}
    </div>
  );
};

export default ListProducts;
