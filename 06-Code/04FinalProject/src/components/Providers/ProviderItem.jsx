/* Author: Michael Gudiño */

import { useNavigate } from "react-router-dom";
import { deleteProvider } from "../../services/axiosProviders";

const ProviderItem = ({ provider, getProviders }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de eliminar este proveedor?")) return;

    await deleteProvider(provider.id);
    getProviders();
  };

  const handleUpdate = () => {
    localStorage.setItem("provider", JSON.stringify(provider));
    navigate("/providers/add");
  };

  return (
    <tr>
      <td className="text-center">{provider.name}</td>
      <td className="text-center">{provider.direction}</td>
      <td className="text-center">{provider.phone}</td>
      <td className="text-center">{provider.productType}</td>
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

export default ProviderItem;
