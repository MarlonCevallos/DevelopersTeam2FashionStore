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
      <h1 className="text-center mt-4">Lista de Productos</h1>

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

      {/**
       
<h1 className="text-center mt-4">REPORTE DE VENTAS</h1>
      <table className="table table-info mt-4">
        <thead>
          <tr>
            <th className="text-center">NÚMERO DE VENTAS</th>
            <th className="text-center">TOTAL DE VENTAS</th>
            <th className="text-center">PRODUCTOS VENDIDOS</th>
            <th className="text-center">TOTAL GANANCIAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </table>


       
       */}
    </div>
  );
};

export default ListProducts;
