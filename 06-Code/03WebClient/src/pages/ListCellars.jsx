import CellarItem from "../components/Cellars/CellarItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCellars } from "../services/axiosCellers";

const ListCellars = () => {
  const [cellars, setCellars] = useState([]);
  const navigate = useNavigate();

  const _getCellars = async () => {
    const _cellars = await getCellars();
    console.log(_cellars);
    setCellars(_cellars);
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");
    _getCellars();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Inventario</h1>

      <table className="table table-info mt-4">
        <thead>
          <tr>
            <th className="text-center">NOMBRE DEL PRODUCTO</th>
            <th className="text-center">CANTIDAD</th>
            <th className="text-center">DIA DE ENTRADA</th>
            <th className="text-center">DIA DE SALIDA</th>
            <th className="text-center">TIEMPO EN EL INVENTARIO</th>
            <th className="text-center">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {cellars.map((cellar) => (
            <CellarItem
              key={cellar.id}
              cellar={cellar}
              getCellars={_getCellars}
            />
          ))}
        </tbody>
      </table>
      <NavLink to="/cellars/add">
        <button className="btn btn-success">Agregar</button>
      </NavLink>
    </div>
  );
};

export default ListCellars;
