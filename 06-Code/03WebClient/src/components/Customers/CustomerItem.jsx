import { useNavigate } from "react-router-dom";
import { deleteCustomer } from "../../services/axiosCustomers";

const CustomerItem = ({ customer, getCustomers }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de eliminar este cliente?")) return;

    await deleteCustomer(customer.id);
    getCustomers();
  };

  const handleUpdate = () => {
    localStorage.setItem("customer", JSON.stringify(customer));
    navigate("/customers/add");
  };

  return (
    <tr>
      <td className="text-center">{customer.name}</td>
      <td className="text-center">{customer.lastname}</td>
      <td className="text-center">{customer.email}</td>
      <td className="text-center">{customer.phone}</td>
      <td className="text-center">
        <button className="btn btn-primary me-2" onClick={handleUpdate}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CustomerItem;
