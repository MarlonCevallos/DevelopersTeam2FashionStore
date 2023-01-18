import ProviderItem from "../components/Providers/ProviderItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProviders } from "../services/axiosProviders";

const ListProviders = () => {
  const [providers, setProviders] = useState([]);
  const navigate = useNavigate();

  const _getProviders = async () => {
    const _providers = await getProviders();
    setProviders(_providers);
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");

    _getProviders();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Lista de Proveedores</h1>

      <table className="table table-info mt-4">
        <thead>
          <tr>
            <th className="text-center">NOMBRE</th>
            <th className="text-center">DIRECCIÓN</th>
            <th className="text-center">TELÉFONO</th>
            <th className="text-center">TIPO DE PRODUCTO</th>
            <th className="text-center">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <ProviderItem
              key={provider._id}
              provider={provider}
              getProviders={_getProviders}
            />
          ))}
        </tbody>
      </table>
      <NavLink to="/providers/add">
        <button className="btn btn-success">Agregar</button>
      </NavLink>
    </div>
  );
};

export default ListProviders;