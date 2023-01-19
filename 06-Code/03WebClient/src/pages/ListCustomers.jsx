import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomerItem from "../components/Customers/CustomerItem";
import { getCustomers } from "../services/axiosCustomers";

const ListCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    _getCustomers();
  }, []);

  const _getCustomers = async () => {
    const _customers = await getCustomers();
    setCustomers(_customers);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Lista de Clientes</h1>

      <table className="table table-info mt-4">
        <thead>
          <tr>
            <th className="text-center">NOMBRE</th>
            <th className="text-center">APELLIDO</th>
            <th className="text-center">EMAIL</th>
            <th className="text-center">TELÉFONO</th>
            <th className="text-center">OPCIONES</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <CustomerItem
              key={customer._id}
              customer={customer}
              getCustomers={_getCustomers}
            />
          ))}
        </tbody>
      </table>
      <NavLink to="/customers/add">
        <button className="btn btn-success">Agregar</button>
      </NavLink>
    </div>
  );
};

export default ListCustomer;
